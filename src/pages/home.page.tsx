import React from "react";
import { Link } from "react-router-dom";
import {
  FaLongArrowAltRight,
  FaShoppingBag,
  FaBoxOpen,
  FaExternalLinkAlt,
  FaUser,
  FaFacebookSquare,
} from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import {
  FaUsers,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";

import anayticIcon from "../assets/images/analytic-icon.webp";
import upgradeIcon from "../assets/images/upgrade.png";
import topReferralsPagesIcon from "../assets/images/top-referrals-pages-icon.png";

import KeyInsightChart from "../components/keyInsightChart.component";
import WebsiteVisitChart from "../components/websiteVisitChart.component";
import LegendItem from "../components/legendItem.component";
import CurrentVisitChart from "../components/currentVisitChart.component";
import LevelChart from "../components/levelChart.component";
import LiveUsersByCountryGeoChart from "../components/liveUsersByCountryGeoChart.component";
import SessionsByCountriesChart from "../components/sessionsByCountriesChart.component";
import AudienceMetricsChart from "../components/audienceMetricsChart.component";
import AudienceSessionsByCountryChart from "../components/audienceSessionsByCountryChart.component";
import UsersByDeviceChart from "../components/usersByDeviceChart.component";
import TopReferralsPagesChart from "../components/topReferralsPagesChart.component";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="flex flex-col items-center border border-border-color rounded-xs">
        <div className="w-full flex items-center justify-between p-2 bg-status-warning text-stone-950 text-xs font-bold rounded-tr-xs rounded-tl-xs">
          <div className="flex items-center gap-2">
            <IoCalendarOutline size={16} />
            <span>You free trial expired in 17 days!</span>
          </div>
          <Link to="/" className="underline">
            Upgrade
          </Link>
        </div>
        <div className="w-full p-2 flex items-center justify-between bg-bg-secondary rounded-br-xs rounded-bl-xs text-text-primary">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-xs">
              Upgrade your plan from a Free trial, to 'Premium Plan'
            </h3>
            <Link
              to="/"
              className="p-2 bg-accent-primary hover:bg-accent-hover max-w-fit rounded-xs text-xs font-bold text-white transition-colors"
            >
              Upgrade Account
            </Link>
          </div>
          <img src={upgradeIcon} alt="upgrade" className="w-28 h-28" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex items-center justify-between bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-bold text-accent-primary">
              Good Afternoon Cameron
            </h3>
            <p className="text-xs text-text-secondary">
              Stay updated with your store’s performance today. Get a quick
              snapshot of key statistics.
            </p>
            <Link
              to="/ecommerce"
              className="flex items-center gap-2 bg-accent-primary max-w-fit p-2 rounded-xs hover:bg-accent-hover text-xs text-white transition-colors"
            >
              <span className="font-bold">View Full Report</span>
              <FaLongArrowAltRight />
            </Link>
          </div>
          <img src={anayticIcon} alt="analytics" className="w-28 h-28" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
          <h3 className="font-bold">Key Insights</h3>
          <p className="text-xs text-text-secondary">All-Time Revenue</p>
          <p className="text-xl flex items-center gap-2">
            <span>$395.7k</span>
            <span className="text-xs bg-status-success text-white py-1 px-2 rounded-xs">
              +2.7%
            </span>
          </p>
          <KeyInsightChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex items-center justify-between p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex-1 flex items-center justify-between gap-2 bg-bg-primary rounded-xs border border-border-color p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Visitor</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  126,418
                  <span className="text-xs bg-status-success text-white py-1 px-2 rounded-xs">
                    +1.2%
                  </span>
                </p>
                <span className="text-xs text-text-secondary">
                  vs last month
                </span>
              </div>
              <FaUsers className="w-12 h-12 bg-accent-primary text-white p-2 rounded-xs" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2 bg-bg-primary rounded-xs border border-border-color p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Conversion Rate</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  5.3%
                  <span className="text-xs bg-status-error text-white py-1 px-2 rounded-xs">
                    -1.8%
                  </span>
                </p>
                <span className="text-xs text-text-secondary">
                  vs last month
                </span>
              </div>
              <FaShoppingBag className="w-12 h-12 bg-status-success text-white p-2 rounded-xs" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2 bg-bg-primary rounded-xs border border-border-color p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Ad Campaign Clicks</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  11,510
                  <span className="text-xs bg-status-success text-white py-1 px-2 rounded-xs">
                    +2.9%
                  </span>
                </p>
                <span className="text-xs text-text-secondary">
                  vs last month
                </span>
              </div>
              <FaBoxOpen className="w-12 h-12 bg-status-info text-white p-2 rounded-xs" />
            </div>
            <div className="flex-1 flex items-center justify-between gap-2 bg-bg-primary rounded-xs border border-border-color p-4">
              <div className="flex flex-col justify-center gap-2">
                <h3>Bounce Rate</h3>
                <p className="text-xl font-bold flex items-center gap-2">
                  33.48%
                  <span className="text-xs bg-status-success text-white py-1 px-2 rounded-xs">
                    +7.5%
                  </span>
                </p>
                <span className="text-xs text-text-secondary">
                  vs last month
                </span>
              </div>
              <FaExternalLinkAlt className="w-12 h-12 bg-status-warning text-white p-2 rounded-xs" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
          <h3>Level</h3>
          <LevelChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-2 flex flex-col justify-center gap-2 bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold">Website Visits</h3>
              <p className="text-xl flex items-center gap-2">
                $395.7k
                <span className="text-xs bg-status-success text-white py-1 px-2 rounded-xs">
                  +18%
                </span>
                <span className="text-xs text-text-secondary">
                  than last year
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <LegendItem color="#F5440F" label="Site 1" />
              <LegendItem color="#0084D1" label="Site 2" />
            </div>
          </div>
          <WebsiteVisitChart />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
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
                  <span className="bg-status-success text-white py-1 px-2 rounded-xs font-bold text-xs">
                    +2.7%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>308</span>
                  <span className="bg-status-success text-white py-1 px-2 rounded-xs font-bold text-xs">
                    +2.1%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>350</span>
                  <span className="bg-status-error text-white py-1 px-2 rounded-xs font-bold text-xs">
                    -1.6%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Live Users by Country</h3>
          <div className="h-100 w-full rounded-xs">
            <LiveUsersByCountryGeoChart />
          </div>
          <table className="text-xs mt-2 text-left bg-bg-primary border border-border-color">
            <thead className="bg-bg-tertiary">
              <tr>
                <th className="p-2">Duration (secs)</th>
                <th className="p-2">Sessions</th>
                <th className="p-2">Views</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">0-30</td>
                <td className="p-2">2,250</td>
                <td className="p-2">4,250</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">31-60</td>
                <td className="p-2">1,501</td>
                <td className="p-2">2,050</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">61-120</td>
                <td className="p-2">750</td>
                <td className="p-2">1,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Sessions by Countries</h3>
          <SessionsByCountriesChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Audiences Metrics</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 bg-bg-primary rounded-xs p-4 mb-4 border border-border-color">
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-2 border-b md:border-r md:border-b-0 border-border-color">
              <div className="flex items-center gap-2 font-bold">
                <h4 className="text-xl">854</h4>
                <span className="text-status-success text-xs">49%</span>
                <FaArrowTrendUp size={18} className="text-status-success" />
              </div>
              <p className="text-text-secondary text-xs">Avg. Session</p>
            </div>
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-2 border-b md:border-r md:border-b-0 border-border-color">
              <div className="flex items-center gap-2 font-bold">
                <h4 className="text-xl">1,278</h4>
                <span className="text-status-success text-xs">60%</span>
                <FaArrowTrendUp size={18} className="text-status-success" />
              </div>
              <p className="text-text-secondary text-xs">Conversion Rate</p>
            </div>
            <div className="w-full flex-1 flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2 font-bold">
                <h4 className="text-xl">3m 38sec</h4>
                <span className="text-status-success text-xs">37%</span>
                <FaArrowTrendUp size={18} className="text-status-success" />
              </div>
              <p className="text-text-secondary text-xs">
                Avg. Session Duration
              </p>
            </div>
          </div>
          <AudienceMetricsChart />
          <div className="flex items-center justify-center gap-2 text-xs">
            <LegendItem color="#FFDF20" label="Last Year" />
            <LegendItem color="#0084D1" label="Current Year" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Audiences Sessions by Country</h3>
          <div className="flex items-center justify-center gap-2 text-xs">
            <LegendItem color="#FFDF20" label="0 - 50" />
            <LegendItem color="#F5440F" label="51 - 100" />
          </div>
          <AudienceSessionsByCountryChart />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Users by Device</h3>
          <div className="w-full flex items-center justify-center">
            <UsersByDeviceChart />
          </div>
          <div className="flex items-center justify-between gap-2 text-xs mt-2 p-4 bg-bg-primary border border-border-color rounded-xs">
            <div className="flex flex-col justify-center gap-2">
              <LegendItem color="#F5440F" label="Desktop Users" />
              <LegendItem color="#5EA500" label="Mobile Users" />
              <LegendItem color="#0084D1" label="Tablet Users" />
            </div>
            <div className="flex flex-col justify-center gap-2 font-bold">
              <div className="flex items-center gap-2">
                <FaUser size={12} />
                <p>79K</p>
              </div>
              <div className="flex items-center gap-2">
                <FaUser size={12} />
                <p>105K</p>
              </div>
              <div className="flex items-center gap-2">
                <FaUser size={12} />
                <p>43K</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <div className="flex items-center justify-end gap-2 text-status-success">
                <FaArrowTrendUp size={12} />
                <p>10.22%</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center justify-end gap-2 text-status-error">
                  <FaArrowTrendDown size={12} />
                  <p>8.53%</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <div className="flex items-center justify-end gap-2 text-status-error">
                  <FaArrowTrendDown size={12} />
                  <p>6.74%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Top Referrals Pages</h3>
          <div className="flex items-center justify-between gap-2 text-xs">
            <div className="flex flex-col justify-center gap-2">
              <h4 className="font-bold">Total Referrals Page</h4>
              <p className="font-bold text-xl">725,800</p>
              <p className="flex items-center gap-2">
                <span className="bg-status-success text-white py-1 px-2 rounded-xs font-bold">
                  15.68%
                </span>
                <span className="text-text-secondary">vs. previous month</span>
              </p>
            </div>
            <img
              src={topReferralsPagesIcon}
              alt="top referrals pages"
              className="w-32 h-32"
            />
          </div>
          <TopReferralsPagesChart />
          <button className="bg-accent-primary hover:bg-accent-hover text-white font-bold text-xs p-2 rounded-xs transition-colors">
            Show All
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-2 p-4 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
          <h3 className="font-bold">Top Pages</h3>
          <table className="text-xs mt-2 text-left bg-bg-primary border border-border-color">
            <thead className="bg-bg-tertiary">
              <tr>
                <th className="p-2">Active Page</th>
                <th className="p-2">Active</th>
                <th className="p-2">Users</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/analytics</td>
                <td className="p-2">99</td>
                <td className="p-2">25.3%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/ecommerce</td>
                <td className="p-2">86</td>
                <td className="p-2">22.7%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/crm</td>
                <td className="p-2">64</td>
                <td className="p-2">18.7%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/crypto</td>
                <td className="p-2">53</td>
                <td className="p-2">14.2%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/nft</td>
                <td className="p-2">33</td>
                <td className="p-2">12.6%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/blog</td>
                <td className="p-2">20</td>
                <td className="p-2">10.9%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">/job</td>
                <td className="p-2">10</td>
                <td className="p-2">7.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="flex-1 flex flex-col bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
          <h3 className="font-bold">Campaign Performance</h3>
          <div className="flex flex-col justify-center gap-2 mt-2">
            <div className="flex items-center justify-between text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
              <div className="flex items-center gap-2">
                <FaSquareInstagram size={18} />
                <span className="font-bold">Instagram</span>
              </div>
              <span className="bg-status-active text-white rounded-xs px-2 py-1">
                Running
              </span>
            </div>
            <div className="flex items-center justify-between text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
              <div className="flex items-center gap-2">
                <GrGoogle size={18} />
                <span className="font-bold">Google</span>
              </div>
              <span className="bg-status-success text-white rounded-xs px-2 py-1">
                Paused
              </span>
            </div>
            <div className="flex items-center justify-between text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
              <div className="flex items-center gap-2">
                <FaFacebookSquare size={18} />
                <span className="font-bold">Facebook</span>
              </div>
              <span className="bg-status-error text-white rounded-xs px-2 py-1">
                Paused
              </span>
            </div>
            <div className="flex items-center justify-between text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
              <div className="flex items-center gap-2">
                <FaSquareXTwitter size={18} />
                <span className="font-bold">Twitter</span>
              </div>
              <span className="bg-status-info text-white rounded-xs px-2 py-1">
                Completed
              </span>
            </div>
          </div>
        </div>
        <div className="flex-[1.5] flex flex-col justify-center gap-2 bg-bg-secondary rounded-xs border border-border-color p-4 text-text-primary shadow-sm">
          <h3 className="font-bold">Traffic Data</h3>
          <table className="text-xs mt-2 text-left bg-bg-primary border border-border-color">
            <thead className="bg-bg-tertiary">
              <tr>
                <th className="p-2">Source</th>
                <th className="p-2">Visits</th>
                <th className="p-2">Bounce Rate</th>
                <th className="p-2">Goal (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">Direct</td>
                <td className="p-2">1300</td>
                <td className="p-2">30%</td>
                <td className="p-2">80%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">Email Campaign</td>
                <td className="p-2">5000</td>
                <td className="p-2">45%</td>
                <td className="p-2">40%</td>
              </tr>
              <tr className="hover:bg-bg-tertiary border border-border-color transition-colors">
                <td className="p-2">Organic</td>
                <td className="p-2">3000</td>
                <td className="p-2">10%</td>
                <td className="p-2">55%</td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-end text-xs">1-3 of 5</div>
          <button className="bg-accent-primary hover:bg-accent-hover text-xs rounded-xs p-2 font-bold text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
