declare module "liquid-glass-react" {
  import * as React from "react";
  interface LiquidGlassProps {
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
    mouseContainer?: React.RefObject<HTMLElement | null> | null;
    mode?: "standard" | "polar" | "prominent" | "shader";
    overLight?: boolean;
    style?: React.CSSProperties;
  }
  const LiquidGlass: React.FC<LiquidGlassProps>;
  export default LiquidGlass;
} 