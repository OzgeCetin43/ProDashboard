import type React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

import LegendItem from "./legendItem.component";

const levelChartData = [
  { name: "Jan", volume: 60, service: 40 },
  { name: "Feb", volume: 80, service: 30 },
  { name: "Mar", volume: 55, service: 45 },
  { name: "Apr", volume: 95, service: 20 },
  { name: "May", volume: 35, service: 25 },
  { name: "Jun", volume: 60, service: 50 },
  { name: "Jul", volume: 75, service: 30 },
  { name: "Aug", volume: 90, service: 45 },
  { name: "Sep", volume: 55, service: 50 },
  { name: "Oct", volume: 80, service: 35 },
  { name: "Nov", volume: 75, service: 45 },
  { name: "Dec", volume: 85, service: 20 },
];

const LevelChart: React.FC = () => {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={levelChartData} barSize={20}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--border-color)",
              color: "var(--chart-tooltip-text)",
            }}
            itemStyle={{ color: "var(--chart-tooltip-text)" }}
          />
          <Bar dataKey="service" stackId="a" fill="var(--chart-1)" />
          <Bar dataKey="volume" stackId="a" fill="var(--chart-5)" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-4 text-xs">
        <LegendItem color="var(--chart-5)" label="Volume" />
        <LegendItem color="var(--chart-1)" label="Service" />
      </div>
    </div>
  );
};

export default LevelChart;
