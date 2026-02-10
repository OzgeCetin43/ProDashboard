import React from "react";
import { ResponsiveChoroplethCanvas } from "@nivo/geo";

import { liveUsersByCountryGeoChartFeatures } from "../assets/data/liveUsersByCountryGeoChartFeatures.data";
import { liveUsersByCountryGeoChartData } from "../assets/data/liveUsersByCountryGeoChart.data";

const LiveUsersByCountryGeoChart: React.FC = () => {
  return (
    <ResponsiveChoroplethCanvas
      data={liveUsersByCountryGeoChartData}
      features={liveUsersByCountryGeoChartFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      theme={{
        legends: {
          text: {
            fill: "var(--text-primary)",
            fontSize: 12,
          },
        },
        tooltip: {
          container: {
            background: "var(--chart-tooltip-bg)",
            color: "var(--chart-tooltip-text)",
            fontSize: 12,
          },
        },
      }}
      colors={[
        "var(--chart-5)",
        "var(--chart-4)",
        "var(--chart-3)",
        "var(--chart-1)",
        "var(--chart-2)",
      ]}
      projectionScale={75}
      domain={[0, 1000000]}
      unknownColor="var(--bg-tertiary)"
      label="properties.name"
      valueFormat=".2s"
      enableGraticule={true}
      graticuleLineColor="var(--border-color)"
      borderWidth={0.5}
      borderColor="var(--bg-primary)"
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 10,
          translateY: -10,
          itemsSpacing: 0,
          itemWidth: 92,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 18,
        },
      ]}
    />
  );
};

export default LiveUsersByCountryGeoChart;
