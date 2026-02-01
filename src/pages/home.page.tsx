import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

import anayticIcon from "../assets/images/analytic-icon.webp";
import KeyInsightChart from "../components/keyInsightChart.component";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex items-center justify-between bg-[#212121] m-4 rounded-md border border-neutral-700 p-4">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-bold text-orange-600">
              Good Afternoon Cameron
            </h3>
            <p className="text-xs">
              Stay updated with your store’s performance today. Get a quick
              snapshot of key statistics.
            </p>
            <Link
              to="/ecommerce"
              className="flex items-center gap-2 bg-sky-600 max-w-fit p-2 rounded-xs hover:bg-orange-600 text-xs"
            >
              <span className="font-bold">View Full Report</span>
              <FaLongArrowAltRight />
            </Link>
          </div>
          <img src={anayticIcon} alt="analytics" className="w-28 h-28" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-[#212121] mx-4 md:m-4 rounded-md border border-neutral-700 p-4">
          <h3 className="font-bold">Key Insights</h3>
          <p className="text-xs">All-Time Revenue</p>
          <p className="text-xl flex items-center gap-2">
            <span>$395.7k</span>
            <span className="text-xs bg-green-500 p-1 rounded-xs">+2.7%</span>
          </p>
          <KeyInsightChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
