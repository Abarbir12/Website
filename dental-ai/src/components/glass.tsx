import dynamic from "next/dynamic";
import React from "react";

// Import the package directly and handle SSR
const LiquidGlass = dynamic(
  () => import("liquid-glass-react").then((mod) => mod.default),
  { ssr: false }
);

interface GlassProps {
  children: React.ReactNode;
  displacementScale?: number;
  blurAmount?: number;
  saturation?: number;
  aberrationIntensity?: number;
  elasticity?: number;
  cornerRadius?: number;
  className?: string;
  padding?: string;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mouseContainer?: React.RefObject<any> | null;
  mode?: "standard" | "polar" | "prominent" | "shader";
  overLight?: boolean;
  style?: React.CSSProperties;
}

/**
 * Glass – a thin wrapper around liquid-glass-react with sensible defaults
 * tailored for this project's brand system.
 */
export function Glass({
  children,
  className = "",
  displacementScale = 70,
  blurAmount = 0.08,
  saturation = 140,
  aberrationIntensity = 2,
  elasticity = 0.18,
  cornerRadius = 24,
  padding,
  ...rest
}: GlassProps) {
  return (
    <LiquidGlass
      displacementScale={displacementScale}
      blurAmount={blurAmount}
      saturation={saturation}
      aberrationIntensity={aberrationIntensity}
      elasticity={elasticity}
      cornerRadius={cornerRadius}
      padding={padding}
      className={className}
      {...rest}
    >
      {children}
    </LiquidGlass>
  );
} 