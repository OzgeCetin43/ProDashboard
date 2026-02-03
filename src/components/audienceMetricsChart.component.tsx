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

const audienceMetricsChartData = [
  { month: "Jan", lastYear: 1000, currentYear: 3205 },
  { month: "Feb", lastYear: 3525, currentYear: 2588 },
  { month: "Mar", lastYear: 7644, currentYear: 9832 },
  { month: "Apr", lastYear: 8500, currentYear: 6548 },
  { month: "May", lastYear: 6235, currentYear: 7546 },
  { month: "Jun", lastYear: 4300, currentYear: 4335 },
  { month: "Jul", lastYear: 2896, currentYear: 3000 },
  { month: "Aug", lastYear: 3567, currentYear: 4547 },
  { month: "Sep", lastYear: 3698, currentYear: 3559 },
  { month: "Oct", lastYear: 4187, currentYear: 7652 },
  { month: "Nov", lastYear: 3200, currentYear: 3421 },
  { month: "Dec", lastYear: 2680, currentYear: 4200 },
];

const AudienceMetricsChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={audienceMetricsChartData} barSize={28}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip />
          <Bar dataKey="lastYear" stackId="a" fill="#FFDF20" />
          <Bar dataKey="currentYear" stackId="a" fill="#0084D1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AudienceMetricsChart;
