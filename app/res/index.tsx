import React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowLeft = ({
  color = '#28282A'
}: {
  color?: string;
}): React.ReactElement => (
  <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <Path
      d="M12 10L7 15M7 15L12 20M7 15H23"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);