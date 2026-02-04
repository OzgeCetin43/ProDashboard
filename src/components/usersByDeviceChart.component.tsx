import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const usersByDeviceChartData = [
  { name: "Desktop Users", value: 79, color: "#F5440F" },
  { name: "Mobile Users", value: 105, color: "#5EA500" },
  { name: "Tablet Users", value: 43, color: "#0084D1" },
];

const UsersByDeviceChart: React.FC = () => {
  const total = usersByDeviceChartData.reduce(
    (sum: number, d: any) => sum + d.value,
    0
  );

  return (
    <div className="relative h-70 w-70">
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm text-gray-400">Total</span>
        <span className="text-2xl font-semibold text-white">{total}K</span>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={usersByDeviceChartData}
            dataKey="value"
            innerRadius={70}
            outerRadius={120}
            paddingAngle={2}
            startAngle={90}
            endAngle={-270}
          >
            <Tooltip />
            {usersByDeviceChartData.map((entry: any, index: number) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsersByDeviceChart;
