import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import LegendItem from "./legendItem.component";

const keyInsightData = [
  {
    name: "Revenue",
    asia: 38,
    usa: 20,
    europe: 26,
  },
];

const KeyInsightChart: React.FC = () => {
  return (
    <>
      <div className="w-full h-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={keyInsightData} layout="vertical" barSize={8}>
            <XAxis type="number" hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--chart-tooltip-bg)",
                borderColor: "var(--border-color)",
                color: "var(--chart-tooltip-text)",
              }}
              itemStyle={{ color: "var(--chart-tooltip-text)" }}
            />
            <Bar
              dataKey="asia"
              stackId="a"
              fill="var(--chart-1)"
              radius={[4, 0, 0, 4]}
            />
            <Bar dataKey="usa" stackId="a" fill="var(--chart-3)" />
            <Bar
              dataKey="europe"
              stackId="a"
              fill="var(--chart-2)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex gap-4 text-xs">
        <LegendItem color="var(--chart-1)" label="Asia" />
        <LegendItem color="var(--chart-3)" label="USA" />
        <LegendItem color="var(--chart-2)" label="Europe" />
      </div>
    </>
  );
};

export default KeyInsightChart;
