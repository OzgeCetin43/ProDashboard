import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaUsers, FaImages, FaCheck, FaEdit } from "react-icons/fa";
import { LuPuzzle } from "react-icons/lu";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {
  MdOutlineSecurity,
  MdOutlineTabletAndroid,
  MdLogout,
} from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

import securityOverviewIcon from "../assets/images/security-overview-icon.svg";
import androidIcon from "../assets/images/android-icon.svg";
import iosIcon from "../assets/images/ios-icon.svg";
import hero1 from "../assets/images/assignee-1.png";
import hero2 from "../assets/images/assignee-2.png";
import hero3 from "../assets/images/assignee-3.png";
import hero4 from "../assets/images/assignee-4.png";
import hero5 from "../assets/images/assignee-5.png";

const Security: React.FC = () => {
  const [toggleInvitingOthers, setToggleInvitingOthers] =
    useState<boolean>(false);
  const [toggleThirdPartyIntegrations, setToggleThirdPartyIntegrations] =
    useState<boolean>(false);
  const [toggleAllowUseLocation, setToggleAllowUseLocation] =
    useState<boolean>(true);
  const [toggleAllowPublicProfile, setToggleAllowPublicProfile] =
    useState<boolean>(true);
  const [toggleTwoStepVerification, setToggleTwoStepVerification] =
    useState<boolean>(true);

  return (
    <div className="flex flex-col justify-center gap-2 p-2 rounded-xs">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="font-bold">Security Overview</h3>
          <p className="text-xs text-text-secondary">
            Central Hub for Personal Customization
          </p>
        </div>
        <button className="bg-accent-primary hover:bg-accent-hover p-2 font-bold text-xs rounded-xs cursor-pointer text-white">
          Security History
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full flex-2 flex bg-bg-secondary flex-col-reverse md:flex-row justify-between items-center gap-2 p-2 border border-border-color rounded-xs shadow-sm">
          <div className="flex flex-col md:items-start items-center justify-center gap-2">
            <h3 className="font-bold text-center md:text-left text-xs">
              Essential Personal Security Tips for Enhanced Safety
            </h3>
            <p className="text-xs text-center text-text-secondary md:text-left">
              Transform your living space beautifully with our Restyle Your
              Space: Soft Goods Makeover Ideas tutorial
            </p>
            <div className="flex flex-wrap flex-col md:flex-row gap-2">
              <div className="w-full md:w-[49%] flex items-center gap-2">
                <CiBookmarkCheck size={18} className="text-status-success" />
                <p className="text-xs">Strong Passwords</p>
              </div>
              <div className="w-full md:w-[49%] flex items-center gap-2">
                <CiBookmarkCheck size={18} className="text-status-success" />
                <p className="text-xs">Two-Factor Authentication</p>
              </div>
              <div className="w-full md:w-[49%] flex items-center gap-2">
                <CiBookmarkCheck size={18} className="text-status-success" />
                <p className="text-xs">Budget-Friendly</p>
              </div>
              <div className="w-full md:w-[49%] flex items-center gap-2">
                <CiBookmarkCheck size={18} className="text-status-success" />
                <p className="text-xs">Fresh Look</p>
              </div>
            </div>
            <button className="w-full md:w-fit bg-accent-primary hover:bg-accent-hover p-2 font-bold text-xs rounded-xs cursor-pointer text-white">
              View Security Tips
            </button>
          </div>
          <img
            src={securityOverviewIcon}
            alt="security overview"
            className="w-32 h-32"
          />
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-bg-secondary border border-border-color rounded-xs shadow-sm">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center bg-bg-primary text-secondary gap-2 border border-border-color rounded-xs p-2">
              <div className="flex items-center justify-center w-12 h-12 bg-bg-tertiary rounded-full">
                <img src={androidIcon} alt="android" className="w-8 h-8" />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col justify-between gap-1">
                  <h3 className="font-bold">Android</h3>
                  <p className="text-xs text-text-secondary">Active Sessions</p>
                </div>
                <p className="text-lg">34</p>
              </div>
            </div>
            <div className="flex items-center bg-bg-primary text-secondary gap-2 border border-border-color rounded-xs p-2">
              <div className="flex items-center justify-center w-12 h-12 bg-bg-tertiary rounded-full">
                <img src={iosIcon} alt="android" className="w-8 h-8" />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col justify-between gap-1">
                  <h3 className="font-bold">IOS</h3>
                  <p className="text-xs text-text-secondary">Active Sessions</p>
                </div>
                <p className="text-lg">25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full flex-2 flex bg-bg-secondary flex-col justify-center gap-2 p-2 border border-border-color rounded-xs shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-color p-2">
            <div className="flex items-center gap-2">
              <FaUsers
                size={18}
                className="p-2 w-10 h-10 bg-bg-tertiary rounded-full"
              />
              <div className="flex flex-col justify-between gap-1">
                <h3 className="font-bold text-xs flex items-center gap-2">
                  Prevent members from inviting others
                  <span className="bg-status-info text-white px-2 py-1 text-xs rounded-xs">
                    Pro
                  </span>
                </h3>
                <p className="text-xs text-text-secondary">
                  Restrict members from sending invites to new potential
                  members.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleInvitingOthers ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() => setToggleInvitingOthers(!toggleInvitingOthers)}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleInvitingOthers ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-color p-2">
            <div className="flex items-center gap-2">
              <LuPuzzle
                size={18}
                className="p-2 w-10 h-10 bg-bg-tertiary rounded-full"
              />
              <div className="flex flex-col justify-between gap-1">
                <h3 className="font-bold text-xs flex items-center gap-2">
                  Prevent members from installing third-party integrations
                  <span className="bg-status-info text-white px-2 py-1 text-xs rounded-xs">
                    Pro
                  </span>
                </h3>
                <p className="text-xs text-text-secondary">
                  Prohibit the installation of external apps or integrations by
                  members.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleThirdPartyIntegrations ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() =>
                  setToggleThirdPartyIntegrations(!toggleThirdPartyIntegrations)
                }
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleThirdPartyIntegrations ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-color p-2">
            <div className="flex items-center gap-2">
              <FaLocationCrosshairs
                size={18}
                className="p-2 w-10 h-10 bg-bg-tertiary rounded-full"
              />
              <div className="flex flex-col justify-between gap-1">
                <h3 className="font-bold text-xs">Allow use location</h3>
                <p className="text-xs text-text-secondary">
                  Enable feature to use and share the user's location.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleAllowUseLocation ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() =>
                  setToggleAllowUseLocation(!toggleAllowUseLocation)
                }
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleAllowUseLocation ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-color p-2">
            <div className="flex items-center gap-2">
              <MdOutlineSecurity
                size={18}
                className="p-2 w-10 h-10 bg-bg-tertiary rounded-full"
              />
              <div className="flex flex-col justify-between gap-1">
                <h3 className="font-bold text-xs flex items-center gap-2">
                  Push protection for yourself
                  <span className="bg-status-active text-white px-2 py-1 text-xs rounded-xs">
                    Beta
                  </span>
                </h3>
                <p className="text-xs text-text-secondary">
                  Enable users to create and display a profile publicly.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="w-fit text-xs p-2 cursor-pointer rounded-xs bg-bg-tertiary text-text-primary hover:bg-bg-secondary">
                Setup
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-border-color p-2">
            <div className="flex items-center gap-2">
              <FaImages
                size={18}
                className="p-2 w-10 h-10 bg-bg-tertiary rounded-full"
              />
              <div className="flex flex-col justify-between gap-1">
                <h3 className="font-bold text-xs flex items-center gap-2">
                  Allow public profile
                </h3>
                <p className="text-xs text-text-secondary">
                  Enable users to create and display a profile publicly.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div
                className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleAllowPublicProfile ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() =>
                  setToggleAllowPublicProfile(!toggleAllowPublicProfile)
                }
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleAllowPublicProfile ? "translate-x-5" : ""}`}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-2">
            <div className="flex items-center gap-2">
              <MdOutlineTabletAndroid
                size={18}
                className="p-2 w-10 h-10 bg-bg-tertiary rounded-full"
              />
              <div className="flex flex-col justify-between gap-1">
                <h3 className="font-bold text-xs flex items-center gap-2">
                  Private vulnerability reporting
                  <span className="bg-status-active text-white px-2 py-1 text-xs rounded-xs">
                    Beta
                  </span>
                </h3>
                <p className="text-xs text-text-secondary">
                  Confidential channel for reporting system vulnerabilities.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <button className="text-xs bg-status-error text-white p-2 rounded-xs cursor-pointer hover:opacity-80">
                Disable All
              </button>
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-bg-tertiary text-text-primary hover:bg-bg-secondary">
                Enable All
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-bg-secondary border border-border-color rounded-xs shadow-sm">
          <div className="flex flex-col justify-center gap-2 text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
            <MdOutlineSecurity size={18} className="text-status-error" />
            <h3 className="font-bold">
              Enhancing Security Knowledge: Guides, Tips, and Documentation
            </h3>
            <p className="text-text-secondary">
              Explore comprehensive resources to strengthen security
              understanding through detailed guides, expert tips, and
              documentation.
            </p>
            <Link to="/security" className="text-xs text-accent-primary">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-2 text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
            <FaCheck size={18} className="text-status-error" />
            <h3 className="font-bold">
              Mastering Security Protocols: Learning Through Expert Guidance
            </h3>
            <p className="text-text-secondary">
              Delve into the realm of security with specialized learning
              materials, expert guidance, and practical tips for implementation.
            </p>
            <Link to="/security" className="text-xs text-accent-primary">
              Learn More
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-2 text-xs bg-bg-primary p-2 rounded-xs border border-border-color">
            <RiSecurePaymentFill size={18} className="text-status-error" />
            <h3 className="font-bold">
              Navigating Digital Security: A Comprehensive Learning Journey
            </h3>
            <p className="text-text-secondary">
              Embark on a journey of digital security enlightenment with our
              extensive collection of educational guides and practical advice.
            </p>
            <Link to="/security" className="text-xs text-accent-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-xs p-2 rounded-xs border border-border-color bg-bg-secondary shadow-sm">
        <h3 className="font-bold pb-2 border-b border-border-color">
          Authentication
        </h3>
        <div className="flex items-center justify-between gap-2 p-2 border border-border-color rounded-xs bg-bg-primary">
          <div className="flex flex-col justify-between gap-1">
            <h3 className="font-bold">Password</h3>
            <p className="text-text-secondary">
              Password last changed 2 months ago
            </p>
          </div>
          <FaEdit
            size={18}
            className="text-accent-primary hover:text-accent-hover cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between gap-2 p-2 border border-border-color rounded-xs bg-bg-primary">
          <div className="flex flex-col justify-between gap-1">
            <h3 className="font-bold">2FA</h3>
            <p className="text-text-secondary">To be set</p>
          </div>
          <button className="bg-accent-primary text-white p-2 rounded-xs cursor-pointer hover:bg-accent-hover">
            Setup
          </button>
        </div>
        <div className="flex items-center justify-between gap-2 p-2 border border-border-color rounded-xs bg-bg-primary">
          <div className="flex flex-col justify-between gap-1">
            <h3 className="font-bold">Sign-in-with</h3>
            <div className="flex items-center gap-2">
              <img
                src={iosIcon}
                alt="ios"
                className="w-8 h-8 bg-bg-tertiary rounded-full cursor-pointer p-2"
              />
              <img
                src={androidIcon}
                alt="ios"
                className="w-8 h-8 bg-bg-tertiary rounded-full cursor-pointer p-2"
              />
            </div>
          </div>
          <FaEdit
            size={18}
            className="text-accent-primary hover:text-accent-hover cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 text-xs p-2 rounded-xs border border-border-color bg-bg-secondary shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-2 border-b border-border-color rounded-xs">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <MdOutlineSecurity size={18} />
            <div className="flex flex-col justify-between gap-1">
              <h3 className="font-bold">Enforce two-step verification</h3>
              <p className="text-text-secondary">
                Add an extra layer of security with two-step verification.
              </p>
            </div>
          </div>
          <div
            className={`w-10 h-5 rounded-full cursor-pointer relative ${toggleTwoStepVerification ? "bg-accent-primary" : "bg-bg-tertiary"}`}
            onClick={() =>
              setToggleTwoStepVerification(!toggleTwoStepVerification)
            }
          >
            <div
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full ${toggleTwoStepVerification ? "translate-x-5" : ""}`}
            ></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <MdLogout size={18} />
            <div className="flex flex-col justify-between gap-1">
              <h3 className="font-bold">Logout everyone</h3>
              <p className="text-text-secondary">
                Instantly sign out all users from all devices.
              </p>
            </div>
          </div>
          <button className="text-xs p-2 cursor-pointer rounded-xs bg-bg-tertiary text-text-primary hover:bg-bg-secondary">
            Logout Everyone
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 p-2 bg-bg-secondary rounded-xs border border-border-color text-text-primary shadow-sm">
        <h3 className="font-bold text-xs">Login Sessions</h3>
        <table className="text-xs text-left bg-bg-primary border border-border-color">
          <thead className="bg-bg-tertiary">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Location</th>
              <th className="p-2">Recent Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-bg-tertiary border border-border-color">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    src={hero1}
                    alt="hero"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">Tyler Hero</h3>
                    <p className="text-text-secondary">26 connections</p>
                  </div>
                </div>
              </td>
              <td className="p-2">New Zealand</td>
              <td className="p-2">Current Session</td>
            </tr>
            <tr className="hover:bg-bg-tertiary border border-border-color">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    src={hero2}
                    alt="hero"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">Adam Smith</h3>
                    <p className="text-text-secondary">639 connections</p>
                  </div>
                </div>
              </td>
              <td className="p-2">Canada</td>
              <td className="p-2">1 week ago</td>
            </tr>
            <tr className="hover:bg-bg-tertiary border border-border-color">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    src={hero3}
                    alt="hero"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">Jacob Jones</h3>
                    <p className="text-text-secondary">125 connections</p>
                  </div>
                </div>
              </td>
              <td className="p-2">Malaysia</td>
              <td className="p-2">Today, 09:53 am</td>
            </tr>
            <tr className="hover:bg-bg-tertiary border border-border-color">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    src={hero4}
                    alt="hero"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">Esther Howard</h3>
                    <p className="text-text-secondary">81 connections</p>
                  </div>
                </div>
              </td>
              <td className="p-2">Turkey</td>
              <td className="p-2">Current Session</td>
            </tr>
            <tr className="hover:bg-bg-tertiary border border-border-color">
              <td className="p-2">
                <div className="flex items-center gap-2">
                  <img
                    src={hero5}
                    alt="hero"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold">Cody Fisher</h3>
                    <p className="text-text-secondary">1203 connections</p>
                  </div>
                </div>
              </td>
              <td className="p-2">United States</td>
              <td className="p-2">1 month ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Security;
