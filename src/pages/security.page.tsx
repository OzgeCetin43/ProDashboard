import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

import securityOverviewIcon from "../assets/images/security-overview-icon.svg";
import androidIcon from "../assets/images/android-icon.svg";
import iosIcon from "../assets/images/ios-icon.svg";

const Security: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2 p-2 rounded-xs">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="font-bold">Security Overview</h3>
          <p className="text-xs">Central Hub for Personal Customization</p>
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
            <p className="text-xs text-center md:text-left">
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
            <div className="flex items-center bg-bg-primary hover:bg-accent-hover text-secondary gap-2 border border-border-color rounded-xs p-2">
              <div className="flex items-center justify-center w-12 h-12 bg-bg-tertiary rounded-full">
                <img src={androidIcon} alt="android" className="w-8 h-8" />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col justify-between gap-1">
                  <h3 className="font-bold">Android</h3>
                  <p className="text-xs">Active Sessions</p>
                </div>
                <p className="text-lg">34</p>
              </div>
            </div>
            <div className="flex items-center bg-bg-primary hover:bg-accent-hover text-secondary gap-2 border border-border-color rounded-xs p-2">
              <div className="flex items-center justify-center w-12 h-12 bg-bg-tertiary rounded-full">
                <img src={iosIcon} alt="android" className="w-8 h-8" />
              </div>
              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col justify-between gap-1">
                  <h3 className="font-bold">IOS</h3>
                  <p className="text-xs">Active Sessions</p>
                </div>
                <p className="text-lg">25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
