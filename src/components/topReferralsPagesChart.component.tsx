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
            <Tooltip />
            <Bar dataKey="google" stackId="a" fill="#F5440F" />
            <Bar dataKey="youtube" stackId="a" fill="#5EA500" />
            <Bar dataKey="medium" stackId="a" fill="#0084D1" />
            <Bar dataKey="linkedIn" stackId="a" fill="#FFDF20" />
            <Bar dataKey="github" stackId="a" fill="#000" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-xs">
        <LegendItem color="#F5440F" label="www.google.com" />
        <LegendItem color="#5EA500" label="www.youtube.com" />
        <LegendItem color="#0084D1" label="www.medium.com" />
        <LegendItem color="#FFDF20" label="www.linkedIn.com" />
        <LegendItem color="#000" label="www.github.com" />
      </div>
    </>
  );
};

export default TopReferralsPagesChart;
