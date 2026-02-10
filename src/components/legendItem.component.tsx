import React from "react";

type LegendItemProps = {
  color: string;
  label: string;
};

const LegendItem: React.FC<LegendItemProps> = ({ color, label }) => {
  return (
    <div className="flex items-center gap-1">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="text-text-primary">{label}</span>
    </div>
  );
};

export default LegendItem;
