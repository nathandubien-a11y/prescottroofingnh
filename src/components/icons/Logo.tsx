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
      ? "/logo-color.png"
      : variant === "black"
        ? "/logo-black.png"
        : "/logo-white.png";

  const width = Math.round(height * (928 / 317));

  return (
    <Image
      src={src}
      alt="Archer Roofing logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
