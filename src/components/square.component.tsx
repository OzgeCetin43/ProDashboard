import React from "react";

type SquareProps = {
  cx?: number;
  cy?: number;
  payload?: { value: number };
};

const getColor = (value: number) => {
  if (value <= 50) return "#FFDF20";
  return "#F5440F";
};

const Square: React.FC<SquareProps> = ({ cx = 0, cy = 0, payload }) => {
  const size = 26;

  return (
    <rect
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      rx={4}
      ry={4}
      fill={getColor(payload?.value || 0)}
    />
  );
};

export default Square;
