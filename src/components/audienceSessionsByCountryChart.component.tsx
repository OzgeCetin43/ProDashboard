import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import Square from "./square.component";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = Array.from({ length: 18 }, (_, i) => `${i + 1}h`);

const audienceSessionsByCountryChartData = days.flatMap((day, y) =>
  hours.map((hour, x) => ({
    day,
    hour,
    x,
    y,
    value: Math.floor(Math.random() * 100),
  }))
);

const AudienceSessionsByCountryChart: React.FC = () => {
  return (
    <div className="h-110 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 30, right: 20, bottom: 20, left: 20 }}>
          <XAxis
            type="number"
            dataKey="x"
            ticks={hours.map((_, i) => i)}
            tickFormatter={(v) => hours[v]}
            tickLine={false}
            axisLine={false}
            tickMargin={20}
          />
          <YAxis
            type="number"
            dataKey="y"
            ticks={days.map((_, i) => i)}
            tickFormatter={(v) => days[v]}
            tickLine={false}
            axisLine={false}
            tickMargin={20}
          />
          <Scatter
            data={audienceSessionsByCountryChartData}
            shape={(props) => <Square {...props} />}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AudienceSessionsByCountryChart;
