import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const websiteVisitChartData = [
  { month: "Jan", site1: 2500, site2: 2400 },
  { month: "Feb", site1: 4000, site2: 3000 },
  { month: "Mar", site1: 3500, site2: 3000 },
  { month: "Apr", site1: 3000, site2: 4000 },
  { month: "May", site1: 2500, site2: 3000 },
  { month: "Jun", site1: 4300, site2: 2600 },
  { month: "Jul", site1: 2500, site2: 3000 },
  { month: "Aug", site1: 3500, site2: 4500 },
  { month: "Sep", site1: 3000, site2: 2800 },
  { month: "Oct", site1: 4000, site2: 3000 },
  { month: "Nov", site1: 3200, site2: 2200 },
  { month: "Dec", site1: 2700, site2: 4200 },
];

const WebsiteVisitChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={websiteVisitChartData} barSize={28}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="var(--border-color)"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--chart-tooltip-bg)",
              borderColor: "var(--border-color)",
              color: "var(--chart-tooltip-text)",
            }}
            itemStyle={{ color: "var(--chart-tooltip-text)" }}
          />
          <Bar dataKey="site1" stackId="a" fill="var(--chart-5)" />
          <Bar dataKey="site2" stackId="a" fill="var(--chart-1)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WebsiteVisitChart;
