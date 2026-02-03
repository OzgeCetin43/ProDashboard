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
            fill: "#fff",
            fontSize: 12,
          },
        },
      }}
      projectionScale={75}
      domain={[0, 1000000]}
      unknownColor="#101b42"
      label="properties.name"
      valueFormat=".2s"
      enableGraticule={true}
      graticuleLineColor="rgba(0, 0, 0, .2)"
      borderWidth={0.5}
      borderColor="#101b42"
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
