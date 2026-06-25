import Image from "next/image";

export function Logo({
  className = "",
  height = 40,
  variant = "color",
}: {
  className?: string;
  height?: number;
  variant?: "white" | "color" | "black";
}) {
  const src =
    variant === "color"
      ? "/logo-color.jpg"
      : variant === "black"
        ? "/logo-black.png"
        : "/logo-white.png";

  const width = Math.round(height * (3689 / 1274));

  return (
    <Image
      src={src}
      alt="Prescott Roofing logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
