export function RoofWatermark() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 900 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] md:w-[750px] lg:w-[900px] h-auto opacity-[0.06]"
      >
        {/* Main roof outline */}
        <path
          d="M450 40L850 300H50L450 40Z"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Inner roof line */}
        <path
          d="M450 90L790 300H110L450 90Z"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* House body */}
        <path
          d="M130 300V460H770V300"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Chimney */}
        <rect x="620" y="120" width="50" height="130" stroke="white" strokeWidth="2.5" rx="2" />
        {/* Window left */}
        <rect x="250" y="340" width="80" height="80" stroke="white" strokeWidth="2" rx="4" />
        <line x1="290" y1="340" x2="290" y2="420" stroke="white" strokeWidth="1.5" />
        <line x1="250" y1="380" x2="330" y2="380" stroke="white" strokeWidth="1.5" />
        {/* Window right */}
        <rect x="570" y="340" width="80" height="80" stroke="white" strokeWidth="2" rx="4" />
        <line x1="610" y1="340" x2="610" y2="420" stroke="white" strokeWidth="1.5" />
        <line x1="570" y1="380" x2="650" y2="380" stroke="white" strokeWidth="1.5" />
        {/* Door */}
        <rect x="390" y="350" width="70" height="110" stroke="white" strokeWidth="2" rx="4" />
        <circle cx="447" cy="410" r="5" stroke="white" strokeWidth="1.5" />
        {/* Roof ridge detail lines */}
        <line x1="200" y1="210" x2="350" y2="210" stroke="white" strokeWidth="1" opacity="0.7" />
        <line x1="550" y1="210" x2="700" y2="210" stroke="white" strokeWidth="1" opacity="0.7" />
      </svg>
    </div>
  );
}
