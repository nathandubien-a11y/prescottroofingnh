<?php
/**
 * Lead handler for prescottroofingnh.com quote forms.
 *
 * Emails each lead to the sales team from the site's own domain (SPF on
 * prescottroofingnh.com authorizes Hostinger mail) and appends a backup copy
 * to a CSV stored one level above the public web root, so a lead is never
 * lost even if an email bounces or lands in spam.
 */

header('Content-Type: application/json');
header('Cache-Control: no-store');

const LEAD_RECIPIENTS = ['nathan@prescottroofingnh.com', 'Tyler@prescottroofingnh.com'];
const LEAD_FROM = 'noreply@prescottroofingnh.com';
const MAX_FIELD_LENGTH = 2000;

function respond(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => 'false', 'message' => 'Method not allowed']);
}

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    $input = $_POST;
}

// Bots fill every field; real visitors never see this one.
if (!empty($input['company_website'])) {
    respond(200, ['success' => 'true', 'emailed' => 'true']);
}

$fields = [];
foreach ($input as $key => $value) {
    if (!is_string($key) || $key === '' || $key[0] === '_' || $key === 'company_website') {
        continue;
    }
    if (is_bool($value)) {
        $value = $value ? 'yes' : 'no';
    }
    if (!is_scalar($value)) {
        continue;
    }
    $clean = trim(substr((string) $value, 0, MAX_FIELD_LENGTH));
    if ($clean !== '') {
        $fields[preg_replace('/[^a-z0-9_]/i', '', $key)] = $clean;
    }
}

foreach (['name', 'phone', 'town'] as $required) {
    if (empty($fields[$required])) {
        respond(422, ['success' => 'false', 'message' => "Missing $required"]);
    }
}

$oneLine = static fn(string $s): string => trim(preg_replace('/[\r\n]+/', ' ', $s));

$name = $oneLine($fields['name']);
$town = $oneLine($fields['town']);
$project = $oneLine($fields['project'] ?? 'Roof Quote');
$subject = "New Ad Lead: $name - $project ($town)";
if (!empty($input['_subject']) && is_string($input['_subject'])) {
    $subject = $oneLine(substr($input['_subject'], 0, 200));
}

$labels = [
    'name' => 'Name',
    'phone' => 'Phone',
    'email' => 'Email',
    'town' => 'Town / address',
    'project' => 'Project',
    'service' => 'Service',
    'message' => 'Message',
    'insurance_claim' => 'Insurance claim',
    'sms_consent' => 'SMS consent',
    'sms_consent_at' => 'SMS consent time',
    'lead_source' => 'Lead source',
    'landing_page' => 'Landing page',
];

$lines = [];
foreach ($labels as $key => $label) {
    if (isset($fields[$key])) {
        $lines[] = str_pad($label . ':', 20) . $fields[$key];
    }
}
foreach ($fields as $key => $value) {
    if (!isset($labels[$key]) && $key !== 'sms_consent_page') {
        $lines[] = str_pad($key . ':', 20) . $value;
    }
}
$receivedAt = date('Y-m-d H:i:s T');
$lines[] = '';
$lines[] = "Received: $receivedAt";

$body = "New lead from prescottroofingnh.com\n\n" . implode("\n", $lines) . "\n";

$headers = [
    'From: Prescott Roofing Website <' . LEAD_FROM . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];
$email = $fields['email'] ?? '';
if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $oneLine($name) . ' <' . $email . '>';
}

// Backup copy first, so the lead survives even if mail delivery fails.
$logFile = dirname(__DIR__) . '/prescott-leads.csv';
$saved = false;
$handle = @fopen($logFile, 'a');
if ($handle) {
    if (@flock($handle, LOCK_EX)) {
        $saved = @fputcsv($handle, [
            $receivedAt,
            $fields['name'] ?? '',
            $fields['phone'] ?? '',
            $fields['email'] ?? '',
            $fields['town'] ?? '',
            $fields['project'] ?? ($fields['service'] ?? ''),
            $fields['lead_source'] ?? '',
            $fields['gclid'] ?? '',
            $fields['utm_campaign'] ?? '',
            $fields['sms_consent'] ?? '',
            $fields['message'] ?? '',
        ]) !== false;
        @flock($handle, LOCK_UN);
    }
    @fclose($handle);
}

$sent = @mail(
    implode(', ', LEAD_RECIPIENTS),
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers),
    '-f' . LEAD_FROM
);

if (!$sent && !$saved) {
    respond(500, ['success' => 'false', 'message' => 'Could not deliver lead']);
}

respond(200, ['success' => 'true', 'emailed' => $sent ? 'true' : 'false']);
