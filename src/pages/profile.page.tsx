import React, { useRef, useState } from "react";
import { TbCircleDashedCheck } from "react-icons/tb";
import {
  FaMapLocationDot,
  FaPhone,
  FaFolderOpen,
  FaFileZipper,
  FaSquareGithub,
} from "react-icons/fa6";
import { IoMdMailUnread, IoIosMan } from "react-icons/io";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import {
  IoCalendarOutline,
  IoDocuments,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { SiImgur, SiAdobephotoshop } from "react-icons/si";
import {
  FaFilePdf,
  FaUsers,
  FaCode,
  FaLinkedin,
  FaRegHeart,
  FaShare,
} from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { HiUserAdd } from "react-icons/hi";

import profileBackground from "../assets/images/profile-bg.jpg";
import avatar from "../assets/images/avatar.jpg";
import recentActivity from "../assets/images/recent-activity.jpg";
import avatar1 from "../assets/images/avatar-1.webp";
import avatar2 from "../assets/images/avatar-2.webp";
import avatar3 from "../assets/images/avatar-3.webp";
import newTeamMember from "../assets/images/recent-activity-new-team-member.jpg";
import popularPost1 from "../assets/images/popular-post-1.jpg";
import popularPost2 from "../assets/images/popular-post-2.jpg";
import popularPost3 from "../assets/images/popular-post-3.jpg";
import suggestion1 from "../assets/images/suggestion-1.jpg";
import suggestion2 from "../assets/images/suggestion-2.jpg";
import suggestion3 from "../assets/images/suggestion-3.jpg";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";
import post4 from "../assets/images/post-4.jpg";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-center gap-2 p-2 rounded-xs">
      <div className="relative">
        <img
          src={profileBackground}
          alt="profile background"
          className="w-full h-60 object-cover rounded-xs"
        />
        <div className="flex flex-col md:flex-row justify-between absolute bottom-0 p-2 left-1/2 w-[calc(100%-40px)] h-auto md:h-1/2 p-2 bg-neutral-950 border border-neutral-700 -translate-x-1/2 translate-y-1/2 rounded-xs">
          <div className="flex gap-2">
            <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-1">
              <h1 className="text-white text-lg font-semibold">Cameron Doe</h1>
              <p className="text-xs font-bold">Fashion & Graphic Designer</p>
              <p className="text-xs">Turkey</p>
              <p className="text-neutral-400 text-xs">@camerondoe</p>
            </div>
            <TbCircleDashedCheck size={18} className="text-green-600" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-end gap-2 md:mt-0 mt-2 w-full">
            <div className="bg-neutral-800 flex flex-col items-center gap-2 w-full md:w-50 border border-neutral-700 rounded-xs p-2">
              <h3 className="font-bold">102</h3>
              <p className="text-xs">Post</p>
            </div>
            <div className="bg-neutral-800 flex flex-col items-center gap-2 w-full md:w-50 border border-neutral-700 rounded-xs p-2">
              <h3 className="font-bold">3.5K</h3>
              <p className="text-xs">Followers</p>
            </div>
            <div className="bg-neutral-800 flex flex-col items-center gap-2 w-full md:w-50 border border-neutral-700 rounded-xs p-2">
              <h3 className="font-bold">950</h3>
              <p className="text-xs">Following</p>
            </div>
            <div className="flex items-center gap-2 bg-neutral-950 p-2">
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-orange-600">
                Hire me
              </button>
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-sky-600">
                Follow
              </button>
              <button className="text-xs p-2 cursor-pointer rounded-xs bg-pink-600">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-2 justify-between mt-48 md:mt-15">
        <div className="bg-[#1a1a1a] border border-neutral-700 rounded-xs p-2 w-full flex-1 text-xs flex flex-col gap-2">
          <h3 className="font-bold">Personal Information</h3>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
            <FaMapLocationDot size={18} />
            Turkey, Izmir
          </div>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
            <IoMdMailUnread size={18} />
            cameron.doe@gmail.com
          </div>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
            <FaPhone size={18} />
            +123 456 7890
          </div>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
            <MdOutlineAdminPanelSettings size={18} />
            Admin
          </div>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
            <IoIosMan size={18} />
            Male
          </div>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
            <IoCalendarOutline size={18} />
            35 years old
          </div>
          <div className="flex items-center gap-2 bg-neutral-950 p-2 rounded-xs border border-neutral-700">
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
                <span className="text-neutral-700">90%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-red-500 rounded-full"
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
                <span className="text-neutral-700">80%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-green-500 rounded-full"
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
                <span className="text-neutral-700">75%</span>
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-yellow-500 rounded-full"
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
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-purple-500 rounded-full"
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
                <span className="text-xs text-neutral-700">28 Jan 2026</span>
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
                <span className="text-xs text-neutral-700">27 Jan 2026</span>
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
                <span className="text-xs text-neutral-700">26 Jan 2026</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
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
        <div className="bg-[#1a1a1a] border border-neutral-700 rounded-xs p-2 w-full flex-3 text-xs">
          {activeTab === "profile" && (
            <div className="flex flex-col justify-center gap-2">
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">About Us</h3>
                <p className="text-xs">
                  Welcome to our profile section. This space provides a
                  consolidated overview of your role, ongoing projects, and
                  recent contributions within the platform. As a valued member
                  of the administrative team, your work plays a crucial role in
                  maintaining the integrity and progress of ongoing operations.
                </p>
                <p className="text-xs">
                  Whether you're reviewing reports, coordinating with team
                  members, or managing workflow across multiple modules, this
                  dashboard is tailored to keep everything at your fingertips.
                  It also ensures that updates, alerts, and deadlines are always
                  in view, empowering you to take timely action when needed.
                  Through this panel, track the status of collaborative
                  projects, and manage essential content tied to your
                  department.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <h3 className="font-bold">Recent Activity</h3>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex flex-col gap-2">
                    <SiImgur
                      size={18}
                      className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600"
                    />
                    <div className="flex flex-col gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
                      <h3 className="font-bold">Profile Image Updated</h3>
                      <p>
                        The user updated their profile picture to reflect the
                        latest changes. This image will now appear across all
                        modules including dashboard, reports, and communication
                        logs.
                      </p>
                      <p className="flex items-center gap-2">
                        Uploaded
                        <span className="font-bold">"profile-new.jpg"</span>
                      </p>
                      <img
                        src={recentActivity}
                        alt="recent activity"
                        className="w-40 h-20 rounded-xs object-cover cursor-pointer"
                      />
                      <p className="text-neutral-700 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <IoDocuments
                      size={18}
                      className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600"
                    />
                    <div className="flex flex-col gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
                      <h3 className="font-bold">Document Added to Project</h3>
                      <p>
                        A new document has been successfully added to the
                        assigned project folder. This file is now available for
                        all collaborators with appropriate access rights and can
                        be viewed or downloaded from the project resources
                        section.
                      </p>
                      <p className="flex items-center gap-2">
                        Uploaded
                        <span className="font-bold">
                          "UX_Research_Notes.pdf"
                        </span>
                      </p>
                      <div className="flex items-center gap-2 bg-neutral-600 border border-neutral-700 rounded-xs p-2">
                        <FaFilePdf size={18} />
                        <span className="font-bold">UX_Research_Notes.pdf</span>
                      </div>
                      <p className="text-neutral-700 text-xs">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <IoChatbubbleEllipsesOutline
                      size={18}
                      className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600"
                    />
                    <div className="flex flex-col gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
                      <h3 className="font-bold">Commented on team update</h3>
                      <p>
                        The user provided feedback on the latest team progress
                        post regarding project milestones. The comment reflects
                        engagement and readiness for the upcoming review
                        session.
                      </p>
                      <p>"Looks great! Let’s review this tomorrow."</p>
                      <div className="flex items-center gap-2">
                        <img
                          src={avatar1}
                          alt="avatar"
                          className="w-10 h-10 bg-neutral-600 p-2 rounded-full"
                        />
                        <img
                          src={avatar2}
                          alt="avatar"
                          className="w-10 h-10 bg-neutral-600 p-2 rounded-full"
                        />
                        <img
                          src={avatar3}
                          alt="avatar"
                          className="w-10 h-10 bg-neutral-600 p-2 rounded-full"
                        />
                        <p className="text-xs">+2 more</p>
                      </div>
                      <p className="text-neutral-700 text-xs">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FaFolderOpen
                      size={18}
                      className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600"
                    />
                    <div className="flex flex-col gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
                      <h3 className="font-bold">Marketing Assets Shared</h3>
                      <p>
                        The user shared a compressed folder containing brand
                        guidelines, logos, and campaign creatives with the
                        entire marketing team. Members with access can now
                        download or reference these assets in their respective
                        modules.
                      </p>
                      <p className="flex items-center gap-2">
                        Shared with team
                        <span className="font-bold">
                          "marketing-assets.zip"
                        </span>
                      </p>
                      <div className="flex items-center gap-2 bg-neutral-600 border border-neutral-700 rounded-xs p-2">
                        <FaFileZipper size={18} />
                        <span className="font-bold">
                          marketing-assets.zip (6.9 MB)
                        </span>
                      </div>
                      <p className="text-neutral-700 text-xs">27 Jan 2026</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <FaUsers
                      size={18}
                      className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600"
                    />
                    <div className="flex flex-col gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
                      <h3 className="font-bold">Joined new team</h3>
                      <p>
                        The user John Carter was successfully added to the
                        “Marketing Strategy Group” to collaborate on campaign
                        planning, content development, and cross-platform
                        initiatives.
                      </p>
                      <div className="flex items-center gap-2">
                        <img
                          src={newTeamMember}
                          alt="new team member"
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="flex flex-col justify-center gap-2">
                          <span className="font-bold">John Carter</span>
                          <span className="text-neutral-700 text-xs">
                            Marketing Specialist
                          </span>
                        </div>
                      </div>
                      <p className="text-neutral-700 text-xs">25 Jan 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "projects" && (
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Active Projects</h3>
              <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-purple-600">Website Redesign 2026</h3>
                  <span className="bg-purple-600 px-2 py-1 rounded-xs">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    Start: <span className="text-neutral-700">25 Jan 2026</span>
                  </p>
                  <p>
                    End: <span className="text-neutral-700">28 Jan 2026</span>
                  </p>
                </div>
                <p>
                  Revamping the corporate website to enhance user experience and
                  load performance. Includes UI/UX, frontend dev, and testing
                  phases.
                </p>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-700">
                      Tasks: <span>169/236</span>
                    </p>
                    <p className="text-neutral-700">65% Completed</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-purple-600 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                  <p className="font-bold text-md">Budget: $2,750</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-yellow-600">Marketing Campaign Q2</h3>
                  <span className="bg-yellow-600 px-2 py-1 rounded-xs">
                    Ongoing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    Start: <span className="text-neutral-700">20 Jan 2026</span>
                  </p>
                  <p>
                    End: <span className="text-neutral-700">24 Jan 2026</span>
                  </p>
                </div>
                <p>
                  Coordinated digital and offline marketing strategies to boost
                  product awareness and lead generation during Q2.
                </p>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-700">
                      Tasks: <span>78/120</span>
                    </p>
                    <p className="text-neutral-700">65% Completed</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-yellow-600 rounded-full"
                      style={{ width: "65%" }}
                    />
                  </div>
                  <p className="font-bold text-md">Budget: $100</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-blue-600">CRM Integration Project</h3>
                  <span className="bg-blue-600 px-2 py-1 rounded-xs">
                    Pending Review
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    Start: <span className="text-neutral-700">20 Jan 2026</span>
                  </p>
                  <p>
                    End: <span className="text-neutral-700">28 Jan 2026</span>
                  </p>
                </div>
                <p>
                  Seamlessly integrating a new CRM platform with existing
                  infrastructure for improved sales tracking and customer
                  engagement workflows.
                </p>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-700">
                      Tasks: <span>102/135</span>
                    </p>
                    <p className="text-neutral-700">75% Completed</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-600 rounded-full"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <p className="font-bold text-md">Budget: $775</p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-green-600">Mobile App Launch</h3>
                  <span className="bg-green-600 px-2 py-1 rounded-xs">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <p>
                    Start: <span className="text-neutral-700">24 Jan 2026</span>
                  </p>
                  <p>
                    End: <span className="text-neutral-700">24 Jan 2026</span>
                  </p>
                </div>
                <p>
                  Development and deployment of the company’s flagship mobile
                  app, including backend integration, QA, and app store
                  submissions.
                </p>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex items-center justify-between">
                    <p className="text-neutral-700">
                      Tasks: <span>220/220</span>
                    </p>
                    <p className="text-neutral-700">100% Completed</p>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-600 rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p className="font-bold text-md">Budget: $12,500</p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p>4 of 20</p>
              </div>
              <div className="flex items-center justify-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 bg-neutral-700 rounded-full m-1 flex items-center justify-center ${index === 0 ? "bg-sky-600" : ""} cursor-pointer`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "posts" && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2">
                <img
                  src={post1}
                  alt="post"
                  className="w-full md:w-1/3 rounded-xs cursor-pointer"
                />
                <img
                  src={post2}
                  alt="post"
                  className="w-full md:w-1/3 rounded-xs cursor-pointer"
                />
                <img
                  src={post3}
                  alt="post"
                  className="w-full md:w-1/3 rounded-xs cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 p-2 bg-neutral-800 rounded-xs">
                <div className="flex items-center gap-2">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="w-20 h-20 rounded-xs"
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <h3 className="font-bold">Cameron Doe</h3>
                    <p className="text-neutral-500">@camerondoe</p>
                    <span className="text-neutral-700">2 hours ago</span>
                  </div>
                </div>
                <img src={post4} alt="post" className="w-full rounded-xs" />
                <div className="flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <FaRegHeart size={18} />
                    <IoChatbubbleEllipsesOutline size={18} />
                    <FaShare size={18} />
                  </div>
                  <div>
                    <CiBookmark size={18} />
                  </div>
                </div>
                <span className="text-md">1,256 likes</span>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-bold text-orange-600">camerondoe</span>
                  <p className="flex items-center gap-2">
                    Weekend vibes with the crew
                    <span className="font-bold">#relax #friends</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 bg-neutral-900 rounded-xs p-2 border border-neutral-700">
                <input type="file" ref={fileInputRef} className="hidden" />
                <div
                  className="w-full border-2 border-dashed border-neutral-950 flex items-center justify-center text-md rounded-xs h-20 cursor-pointer"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Drop files here to upload
                </div>
                <button className="bg-sky-600 hover:bg-orange-600 font-bold px-2 py-1 rounded-xs">
                  Post
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 bg-[#1a1a1a] border border-neutral-700 rounded-xs p-2 w-full flex-1 text-xs">
          <button
            className={`p-2 hover:bg-neutral-600 rounded-xs text-left ${activeTab === "profile" ? "bg-sky-600" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`p-2 hover:bg-neutral-600 rounded-xs text-left ${activeTab === "projects" ? "bg-sky-600" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`p-2 hover:bg-neutral-600 rounded-xs text-left ${activeTab === "posts" ? "bg-sky-600" : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </button>
          <button
            className={`p-2 hover:bg-neutral-600 rounded-xs text-left ${activeTab === "team" ? "bg-sky-600" : ""}`}
            onClick={() => setActiveTab("team")}
          >
            Team
          </button>
          <button
            className={`p-2 hover:bg-neutral-600 rounded-xs text-left ${activeTab === "settings" ? "bg-sky-600" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
          <div className="flex flex-col gap-2 bg-neutral-700 p-2 rounded-xs">
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
                  <p>Frontend Developer</p>
                </div>
              </div>
              <HiUserAdd
                size={18}
                className="w-10 h-10 p-2 bg-neutral-950 cursor-pointer"
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
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <HiUserAdd
                size={18}
                className="w-10 h-10 p-2 bg-neutral-950 cursor-pointer"
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
                  <p>Backend Developer</p>
                </div>
              </div>
              <HiUserAdd
                size={18}
                className="w-10 h-10 p-2 bg-neutral-950 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
