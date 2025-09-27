import React from "react";
import type { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComp, className }) => {
  // Force TS to treat IconComp as a valid component
  const Comp = IconComp as unknown as React.ComponentType<{ className?: string }>;
  return <Comp className={className} />;
};

export default Icon;