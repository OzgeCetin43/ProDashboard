import React, { useState } from "react";
import { TbCircleDashedCheck } from "react-icons/tb";
import { FaMapLocationDot, FaPhone, FaSquareGithub } from "react-icons/fa6";
import { IoMdMailUnread, IoIosMan } from "react-icons/io";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { FaUsers, FaCode, FaLinkedin } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { HiUserAdd } from "react-icons/hi";

import profileBackground from "../assets/images/profile-bg.jpg";
import avatar from "../assets/images/avatar.jpg";
import popularPost1 from "../assets/images/popular-post-1.jpg";
import popularPost2 from "../assets/images/popular-post-2.jpg";
import popularPost3 from "../assets/images/popular-post-3.jpg";
import suggestion1 from "../assets/images/suggestion-1.jpg";
import suggestion2 from "../assets/images/suggestion-2.jpg";
import suggestion3 from "../assets/images/suggestion-3.jpg";

import ProfileTab from "../components/profileTab.component";
import ProjectsTab from "../components/projectsTab.component";
import PostsTab from "../components/postsTab.component";
import TeamTab from "../components/teamTab.component";
import DocumentsTab from "../components/documentsTab.component";
import SettingsTab from "../components/settingsTab.component";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");

  return (
    <div className="flex flex-col justify-center gap-2 p-2 rounded-xs">
      <div className="relative">
        <img
          src={profileBackground}
          alt="profile background"
          className="w-full h-60 object-cover rounded-xs"
        />
        <div className="flex flex-col md:flex-row justify-between absolute bottom-0 p-2 left-1/2 w-[calc(100%-40px)] h-auto md:h-1/2 p-2 bg-bg-secondary border border-border-color -translate-x-1/2 translate-y-1/2 rounded-xs shadow-lg">
          <div className="flex gap-2">
            <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-1 text-text-primary">
              <h1 className="text-lg font-semibold">Cameron Doe</h1>
              <p className="text-xs font-bold">Fashion & Graphic Designer</p>
              <p className="text-xs">Turkey</p>
              <p className="text-text-secondary text-xs">@camerondoe</p>
            </div>
            <TbCircleDashedCheck size={18} className="text-status-success" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-end gap-2 md:mt-0 mt-2 w-full text-text-primary">
            <div className="bg-bg-primary flex flex-col items-center gap-2 w-full md:w-50 border border-border-color rounded-xs p-2">
              <h3 className="font-bold">102</h3>
              <p className="text-xs">Post</p>
            </div>
            <div className="bg-bg-primary flex flex-col items-center gap-2 w-full md:w-50 border border-border-color rounded-xs p-2">
              <h3 className="font-bold">3.5K</h3>
              <p className="text-xs">Followers</p>
            </div>
            <div className="bg-bg-primary flex flex-col items-center gap-2 w-full md:w-50 border border-border-color rounded-xs p-2">
              <h3 className="font-bold">950</h3>
              <p className="text-xs">Following</p>
            </div>
            <div className="flex items-center gap-2 bg-bg-secondary p-2">
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-accent-primary text-white hover:bg-accent-hover transition-colors">
                Hire me
              </button>
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-accent-primary text-white hover:bg-accent-hover transition-colors">
                Follow
              </button>
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-bg-tertiary text-text-primary hover:bg-bg-secondary transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-2 justify-between mt-48 md:mt-15">
        <div className="bg-bg-secondary border border-border-color rounded-xs p-2 w-full flex-1 text-xs flex flex-col gap-2 text-text-primary shadow-sm">
          <h3 className="font-bold">Personal Information</h3>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <FaMapLocationDot size={18} />
            Turkey, Izmir
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <IoMdMailUnread size={18} />
            cameron.doe@gmail.com
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <FaPhone size={18} />
            +123 456 7890
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <MdOutlineAdminPanelSettings size={18} />
            Admin
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <IoIosMan size={18} />
            Male
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <IoCalendarOutline size={18} />
            35 years old
          </div>
          <div className="flex items-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <MdOutlineAccessTimeFilled size={18} />
            Joined on Jan 22, 2026
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-bold">Skills Overview</h3>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CiBookmark size={18} />
                  Design
                </div>
                <span className="text-text-secondary">90%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-bg-tertiary rounded-full">
                  <div
                    className="h-2 bg-status-error rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaCode size={18} />
                  FE/BE Development
                </div>
                <span className="text-text-secondary">80%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-bg-tertiary rounded-full">
                  <div
                    className="h-2 bg-status-success rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaUsers size={18} />
                  Team Management
                </div>
                <span className="text-text-secondary">75%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-bg-tertiary rounded-full">
                  <div
                    className="h-2 bg-status-warning rounded-full"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="font-bold flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SiAdobephotoshop size={18} />
                  Photoshop
                </div>
                <span>95%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-bg-tertiary rounded-full">
                  <div
                    className="h-2 bg-status-active rounded-full"
                    style={{ width: "95%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-bold">Popular Posts</h3>
            <div className="flex items-center gap-2">
              <img
                src={popularPost1}
                alt="popular post"
                className="w-12 h-12 rounded-xs"
              />
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Design your apps in your own way</h3>
                <span className="text-xs text-text-secondary">28 Jan 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={popularPost2}
                alt="popular post"
                className="w-12 h-12 rounded-xs"
              />
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">
                  Smartest Applications for Business
                </h3>
                <span className="text-xs text-text-secondary">27 Jan 2026</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={popularPost3}
                alt="popular post"
                className="w-12 h-12 rounded-xs"
              />
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">How to get creative in your work</h3>
                <span className="text-xs text-text-secondary">26 Jan 2026</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <h3 className="font-bold">Portfolio</h3>
            <div className="flex items-center gap-2">
              <FaSquareGithub size={18} />
              <span className="text-xs">github.com/cameron-doe</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin size={18} />
              <span className="text-xs">linkedin.com/cameron-doe</span>
            </div>
          </div>
        </div>
        <div className="bg-bg-secondary border border-border-color rounded-xs p-2 w-full flex-3 text-xs text-text-primary shadow-sm">
          {activeTab === "profile" && <ProfileTab />}
          {activeTab === "projects" && <ProjectsTab />}
          {activeTab === "posts" && <PostsTab />}
          {activeTab === "team" && <TeamTab />}
          {activeTab === "documents" && <DocumentsTab />}
          {activeTab === "settings" && <SettingsTab />}
        </div>
        <div className="flex flex-col gap-2 bg-bg-secondary border border-border-color rounded-xs p-2 w-full flex-1 text-xs text-text-primary shadow-sm">
          <button
            className={`p-2 rounded-xs text-left transition-colors cursor-pointer ${activeTab === "profile" ? "bg-accent-primary text-white hover:bg-accent-hover" : "text-text-primary hover:bg-border-color"}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`p-2 rounded-xs text-left transition-colors cursor-pointer ${activeTab === "projects" ? "bg-accent-primary text-white hover:bg-accent-hover" : "text-text-primary hover:bg-border-color"}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`p-2 rounded-xs text-left transition-colors cursor-pointer ${activeTab === "posts" ? "bg-accent-primary text-white hover:bg-accent-hover" : "text-text-primary hover:bg-border-color"}`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </button>
          <button
            className={`p-2 rounded-xs text-left transition-colors cursor-pointer ${activeTab === "team" ? "bg-accent-primary text-white hover:bg-accent-hover" : "text-text-primary hover:bg-border-color"}`}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>
          <button
            className={`p-2 rounded-xs text-left transition-colors cursor-pointer ${activeTab === "documents" ? "bg-accent-primary text-white hover:bg-accent-hover" : "text-text-primary hover:bg-border-color"}`}
            onClick={() => setActiveTab("documents")}
          >
            Documents
          </button>
          <button
            className={`p-2 rounded-xs text-left transition-colors cursor-pointer ${activeTab === "settings" ? "bg-accent-primary text-white hover:bg-accent-hover" : "text-text-primary hover:bg-border-color"}`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
          <div className="flex flex-col gap-2 bg-bg-primary p-2 rounded-xs border border-border-color">
            <h3 className="font-bold">Suggested for you</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={suggestion1}
                  alt="suggestion"
                  className="w-12 h-12 rounded-xs"
                />
                <div className="flex flex-col justify-center gap-2">
                  <h3>Esther James</h3>
                  <p className="text-text-secondary">Frontend Developer</p>
                </div>
              </div>
              <HiUserAdd
                size={18}
                className="w-10 h-10 p-2 bg-bg-secondary hover:bg-bg-tertiary cursor-pointer rounded-full transition-colors"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={suggestion2}
                  alt="suggestion"
                  className="w-12 h-12 rounded-xs"
                />
                <div className="flex flex-col justify-center gap-2">
                  <h3>Jacqueline Steve</h3>
                  <p className="text-text-secondary">UI/UX Designer</p>
                </div>
              </div>
              <HiUserAdd
                size={18}
                className="w-10 h-10 p-2 bg-bg-secondary hover:bg-bg-tertiary cursor-pointer rounded-full transition-colors"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={suggestion3}
                  alt="suggestion"
                  className="w-12 h-12 rounded-xs"
                />
                <div className="flex flex-col justify-center gap-2">
                  <h3>George Whalen</h3>
                  <p className="text-text-secondary">Backend Developer</p>
                </div>
              </div>
              <HiUserAdd
                size={18}
                className="w-10 h-10 p-2 bg-bg-secondary hover:bg-bg-tertiary cursor-pointer rounded-full transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
