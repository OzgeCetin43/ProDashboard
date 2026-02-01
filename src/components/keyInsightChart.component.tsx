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
            <Tooltip />
            <Bar
              dataKey="asia"
              stackId="a"
              fill="#F5440F"
              radius={[4, 0, 0, 4]}
            />
            <Bar dataKey="usa" stackId="a" fill="#5EA500" />
            <Bar
              dataKey="europe"
              stackId="a"
              fill="#0084D1"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex gap-4 text-xs text-gray-600">
        <LegendItem color="#F5440F" label="Asia" />
        <LegendItem color="#5EA500" label="USA" />
        <LegendItem color="#0084D1" label="Europe" />
      </div>
    </>
  );
};

export default KeyInsightChart;
