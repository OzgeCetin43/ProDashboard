import React, { useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaUsers, FaImages, FaCheck } from "react-icons/fa";
import { LuPuzzle } from "react-icons/lu";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineSecurity, MdOutlineTabletAndroid } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

import securityOverviewIcon from "../assets/images/security-overview-icon.svg";
import androidIcon from "../assets/images/android-icon.svg";
import iosIcon from "../assets/images/ios-icon.svg";
import { Link } from "react-router-dom";

const Security: React.FC = () => {
  const [toggleInvitingOthers, setToggleInvitingOthers] =
    useState<boolean>(false);
  const [toggleThirdPartyIntegrations, setToggleThirdPartyIntegrations] =
    useState<boolean>(false);
  const [toggleAllowUseLocation, setToggleAllowUseLocation] =
    useState<boolean>(true);
  const [toggleAllowPublicProfile, setToggleAllowPublicProfile] =
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
        <button className="bg-accent-primary hover:bg-accent-hover p-2 font-bold text-xs rounded-xs cursor-pointer text-white transition-colors">
          Security History
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2">
        <div className="w-full flex-2 flex bg-bg-secondary flex-col-reverse md:flex-row justify-between items-center gap-2 p-2 border border-border-color rounded-xs">
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
            <button className="w-full md:w-fit bg-accent-primary hover:bg-accent-hover p-2 font-bold text-xs rounded-xs cursor-pointer text-white transition-colors">
              View Security Tips
            </button>
          </div>
          <img
            src={securityOverviewIcon}
            alt="security overview"
            className="w-32 h-32"
          />
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-bg-secondary border border-border-color rounded-xs">
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
        <div className="w-full flex-2 flex bg-bg-secondary flex-col justify-center gap-2 p-2 border border-border-color rounded-xs">
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
                className={`w-10 h-5 rounded-full cursor-pointer relative transition-colors ${toggleInvitingOthers ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() => setToggleInvitingOthers(!toggleInvitingOthers)}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggleInvitingOthers ? "translate-x-5" : ""}`}
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
                className={`w-10 h-5 rounded-full cursor-pointer relative transition-colors ${toggleThirdPartyIntegrations ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() =>
                  setToggleThirdPartyIntegrations(!toggleThirdPartyIntegrations)
                }
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggleThirdPartyIntegrations ? "translate-x-5" : ""}`}
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
                className={`w-10 h-5 rounded-full cursor-pointer relative transition-colors ${toggleAllowUseLocation ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() =>
                  setToggleAllowUseLocation(!toggleAllowUseLocation)
                }
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggleAllowUseLocation ? "translate-x-5" : ""}`}
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
              <button className="w-fit text-xs p-2 cursor-pointer rounded-xs bg-bg-tertiary text-text-primary hover:bg-bg-secondary transition-colors">
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
                className={`w-10 h-5 rounded-full cursor-pointer relative transition-colors ${toggleAllowPublicProfile ? "bg-accent-primary" : "bg-bg-tertiary"}`}
                onClick={() =>
                  setToggleAllowPublicProfile(!toggleAllowPublicProfile)
                }
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-all ${toggleAllowPublicProfile ? "translate-x-5" : ""}`}
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
              <button className="text-xs bg-status-error text-white p-2 rounded-xs cursor-pointer hover:opacity-80 transition-opacity">
                Disable All
              </button>
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-bg-tertiary text-text-primary hover:bg-bg-secondary transition-colors">
                Enable All
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-bg-secondary border border-border-color rounded-xs">
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
    </div>
  );
};

export default Security;
