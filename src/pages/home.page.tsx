import React from "react";
import { Link } from "react-router-dom";
import {
  FaLongArrowAltRight,
  FaShoppingBag,
  FaBoxOpen,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaUsers, FaArrowTrendUp } from "react-icons/fa6";

import anayticIcon from "../assets/images/analytic-icon.webp";
import upgradeIcon from "../assets/images/upgrade.png";

import KeyInsightChart from "../components/keyInsightChart.component";
import WebsiteVisitChart from "../components/websiteVisitChart.component";
import LegendItem from "../components/legendItem.component";
import CurrentVisitChart from "../components/currentVisitChart.component";
import LevelChart from "../components/levelChart.component";
import LiveUsersByCountryGeoChart from "../components/liveUsersByCountryGeoChart.component";
import SessionsByCountriesChart from "../components/sessionsByCountriesChart.component";
import AudienceMetricsChart from "../components/audienceMetricsChart.component";
import AudienceSessionsByCountryChart from "../components/audienceSessionsByCountryChart.component";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-col items-center border border-neutral-700 rounded-xs">
        <div className="w-full flex items-center justify-between p-2 bg-yellow-300 text-stone-950 text-xs font-bold rounded-tr-xs rounded-tl-xs">
          <div className="flex items-center gap-2">
            <IoCalendarOutline size={16} />
            <span>You free trial expired in 17 days!</span>
          </div>
          <Link to="/" className="underline">
            Upgrade
          </Link>
        </div>
        <div className="w-full p-2 flex items-center justify-between bg-[#212121] rounded-br-xs rounded-bl-xs">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-xs">
              Upgrade your plan from a Free trial, to 'Premium Plan'
            </h3>
            <Link
              to="/"
              className="p-2 bg-orange-600 hover:bg-sky-600 max-w-fit rounded-xs text-xs font-bold"
            >
              Upgrade Account
            </Link>
          </div>
          <img src={upgradeIcon} alt="upgrade" className="w-28 h-28" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex items-center justify-between bg-[#212121] rounded-xs border border-neutral-700 p-4">
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
        <div className="flex-1 flex flex-col justify-center gap-2 bg-[#212121] rounded-xs border border-neutral-700 p-4">
          <h3 className="font-bold">Key Insights</h3>
          <p className="text-xs">All-Time Revenue</p>
          <p className="text-xl flex items-center gap-2">
            <span>$395.7k</span>
            <span className="text-xs bg-green-500 py-1 px-2 rounded-xs">
              +2.7%
            </span>
          </p>
          <KeyInsightChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex items-center justify-between p-4 bg-[#212121] rounded-xs border border-neutral-700 ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex-1 flex items-center justify-between gap-2 bg-[#1a1a1a] rounded-xs border border-neutral-700 p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Visitor</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  126,418
                  <span className="text-xs bg-green-500 py-1 px-2 rounded-xs">
                    +1.2%
                  </span>
                </p>
                <span className="text-xs text-neutral-400">vs last month</span>
              </div>
              <FaUsers className="w-12 h-12 bg-orange-600 p-2 rounded-xs" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2 bg-[#1a1a1a] rounded-xs border border-neutral-700 p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Conversion Rate</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  5.3%
                  <span className="text-xs bg-red-500 py-1 px-2 rounded-xs">
                    -1.8%
                  </span>
                </p>
                <span className="text-xs text-neutral-400">vs last month</span>
              </div>
              <FaShoppingBag className="w-12 h-12 bg-green-600 p-2 rounded-xs" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2 bg-[#1a1a1a] rounded-xs border border-neutral-700 p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Ad Campaign Clicks</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  11,510
                  <span className="text-xs bg-green-500 py-1 px-2 rounded-xs">
                    +2.9%
                  </span>
                </p>
                <span className="text-xs text-neutral-400">vs last month</span>
              </div>
              <FaBoxOpen className="w-12 h-12 bg-blue-600 p-2 rounded-xs" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2 bg-[#1a1a1a] rounded-xs border border-neutral-700 p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Bounce Rate</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  33.48%
                  <span className="text-xs bg-green-500 py-1 px-2 rounded-xs">
                    +7.5%
                  </span>
                </p>
                <span className="text-xs text-neutral-400">vs last month</span>
              </div>
              <FaExternalLinkAlt className="w-12 h-12 bg-yellow-500 p-2 rounded-xs" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-[#212121] rounded-xs border border-neutral-700 p-4">
          <h3>Level</h3>
          <LevelChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex flex-col justify-center gap-2 bg-[#212121] rounded-xs border border-neutral-700 p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold">Website Visits</h3>
              <p className="text-xl flex items-center gap-2">
                $395.7k
                <span className="text-xs bg-green-500 py-1 px-2 rounded-xs">
                  +18%
                </span>
                <span className="text-xs text-neutral-500">than last year</span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <LegendItem color="#F5440F" label="Site 1" />
              <LegendItem color="#0084D1" label="Site 2" />
            </div>
          </div>
          <WebsiteVisitChart />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-[#212121] rounded-xs border border-neutral-700 p-4">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-bold">Current Visits</h3>
            <div className="w-full flex items-center justify-center">
              <CurrentVisitChart />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2 text-xs">
                <LegendItem color="#F5440F" label="America" />
                <LegendItem color="#0084D1" label="Europe" />
                <LegendItem color="#5EA500" label="Asia" />
              </div>
              <div className="flex flex-col items-end gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span>1800</span>
                  <span className="bg-green-500 py-1 px-2 rounded-xs font-bold text-xs">
                    +2.7%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>308</span>
                  <span className="bg-green-500 py-1 px-2 rounded-xs font-bold text-xs">
                    +2.1%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>350</span>
                  <span className="bg-red-500 py-1 px-2 rounded-xs font-bold text-xs">
                    -1.6%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-[#212121] rounded-xs border border-neutral-700 ">
          <h3 className="font-bold">Live Users by Country</h3>
          <div className="h-100 w-full rounded-xs">
            <LiveUsersByCountryGeoChart />
          </div>
          <table className="text-xs mt-2 text-left bg-neutral-950 border border-neutral-700">
            <thead className="bg-neutral-600">
              <tr>
                <th className="p-2">Duration (secs)</th>
                <th className="p-2">Sessions</th>
                <th className="p-2">Views</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-neutral-800 border border-neutral-700">
                <td className="p-2">0-30</td>
                <td className="p-2">2,250</td>
                <td className="p-2">4,250</td>
              </tr>
              <tr className="hover:bg-neutral-800 border border-neutral-700">
                <td className="p-2">31-60</td>
                <td className="p-2">1,501</td>
                <td className="p-2">2,050</td>
              </tr>
              <tr className="hover:bg-neutral-800 border border-neutral-700">
                <td className="p-2">61-120</td>
                <td className="p-2">750</td>
                <td className="p-2">1,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-[#212121] rounded-xs border border-neutral-700 ">
          <h3 className="font-bold">Sessions by Countries</h3>
          <SessionsByCountriesChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-[#212121] rounded-xs border border-neutral-700 ">
          <h3 className="font-bold">Audiences Metrics</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-neutral-950 rounded-xs p-4 mb-4">
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-2 border-b md:border-r md:border-b-0 border-neutral-700">
              <div className="flex items-center gap-2 font-bold">
                <h4 className="text-xl">854</h4>
                <span className="text-green-500 text-xs">49%</span>
                <FaArrowTrendUp size={18} className="text-green-500" />
              </div>
              <p className="text-neutral-400 text-xs">Avg. Session</p>
            </div>
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-2 border-b md:border-r md:border-b-0 border-neutral-700">
              <div className="flex items-center gap-2 font-bold">
                <h4 className="text-xl">1,278</h4>
                <span className="text-green-500 text-xs">60%</span>
                <FaArrowTrendUp size={18} className="text-green-500" />
              </div>
              <p className="text-neutral-400 text-xs">Conversion Rate</p>
            </div>
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2 font-bold">
                <h4 className="text-xl">3m 38sec</h4>
                <span className="text-green-500 text-xs">37%</span>
                <FaArrowTrendUp size={18} className="text-green-500" />
              </div>
              <p className="text-neutral-400 text-xs">Avg. Session Duration</p>
            </div>
          </div>
          <AudienceMetricsChart />
          <div className="flex items-center justify-center gap-2">
            <LegendItem color="#FFDF20" label="Last Year" />
            <LegendItem color="#0084D1" label="Current Year" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-4 bg-[#212121] rounded-xs border border-neutral-700 ">
          <h3 className="font-bold">Audiences Sessions by Country</h3>
          <div className="flex items-center justify-center gap-2 text-xs">
            <LegendItem color="#FFDF20" label="0 - 50" />
            <LegendItem color="#F5440F" label="51 - 100" />
          </div>
          <AudienceSessionsByCountryChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
