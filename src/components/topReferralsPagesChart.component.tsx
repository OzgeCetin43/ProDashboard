import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import LegendItem from "./legendItem.component";

const topReferralsPagesChartData = [
  {
    name: "Top Referrals Pages",
    google: 25,
    youtube: 18,
    medium: 23,
    linkedIn: 14,
    github: 20,
  },
];

const TopReferralsPagesChart: React.FC = () => {
  return (
    <>
      <div className="w-full h-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={topReferralsPagesChartData}
            layout="vertical"
            barSize={8}
          >
            <XAxis type="number" hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--chart-tooltip-bg)",
                borderColor: "var(--border-color)",
                color: "var(--chart-tooltip-text)",
              }}
              itemStyle={{ color: "var(--chart-tooltip-text)" }}
            />
            <Bar dataKey="google" stackId="a" fill="var(--chart-5)" />
            <Bar dataKey="youtube" stackId="a" fill="var(--chart-3)" />
            <Bar dataKey="medium" stackId="a" fill="var(--chart-1)" />
            <Bar dataKey="linkedIn" stackId="a" fill="var(--chart-4)" />
            <Bar dataKey="github" stackId="a" fill="var(--chart-2)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-xs">
        <LegendItem color="var(--chart-5)" label="www.google.com" />
        <LegendItem color="var(--chart-3)" label="www.youtube.com" />
        <LegendItem color="var(--chart-1)" label="www.medium.com" />
        <LegendItem color="var(--chart-4)" label="www.linkedIn.com" />
        <LegendItem color="var(--chart-2)" label="www.github.com" />
      </div>
    </>
  );
};

export default TopReferralsPagesChart;
