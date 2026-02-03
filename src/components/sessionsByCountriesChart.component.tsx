import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const sessionsByCountriesChartData = [
  { country: "India", value: 1010 },
  { country: "United States", value: 1640 },
  { country: "China", value: 490 },
  { country: "Indonesia", value: 1255 },
  { country: "Russia", value: 1050, highlight: true },
  { country: "Bangladesh", value: 689 },
  { country: "Canada", value: 800 },
  { country: "Brazil", value: 420 },
  { country: "Vietnam", value: 1085 },
  { country: "UK", value: 589 },
];

const SessionsByCountriesChart: React.FC = () => {
  return (
    <div className="h-135 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sessionsByCountriesChartData}
          layout="vertical"
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis
            type="number"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="country"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 13 }}
          />
          <Bar dataKey="value" barSize={18} radius={[0, 4, 4, 0]}>
            {sessionsByCountriesChartData.map((entry: any, index: number) => (
              <Cell
                key={index}
                fill={entry.highlight ? "#F5440F" : "#0084D1"}
              />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              fill="#9ca3af"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SessionsByCountriesChart;
