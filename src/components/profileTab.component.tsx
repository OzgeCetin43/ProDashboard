import React from "react";
import { FaFolderOpen, FaFileZipper } from "react-icons/fa6";
import { IoDocuments, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { SiImgur } from "react-icons/si";
import { FaFilePdf, FaUsers } from "react-icons/fa";

import recentActivity from "../assets/images/recent-activity.jpg";
import avatar1 from "../assets/images/avatar-1.webp";
import avatar2 from "../assets/images/avatar-2.webp";
import avatar3 from "../assets/images/avatar-3.webp";
import newTeamMember from "../assets/images/recent-activity-new-team-member.jpg";

const ProfileTab: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2 text-text-primary">
      <div className="flex flex-col justify-center gap-2">
        <h3 className="font-bold">About Us</h3>
        <p className="text-xs text-text-secondary">
          Welcome to our profile section. This space provides a consolidated
          overview of your role, ongoing projects, and recent contributions
          within the platform. As a valued member of the administrative team,
          your work plays a crucial role in maintaining the integrity and
          progress of ongoing operations.
        </p>
        <p className="text-xs text-text-secondary">
          Whether you're reviewing reports, coordinating with team members, or
          managing workflow across multiple modules, this dashboard is tailored
          to keep everything at your fingertips. It also ensures that updates,
          alerts, and deadlines are always in view, empowering you to take
          timely action when needed. Through this panel, track the status of
          collaborative projects, and manage essential content tied to your
          department.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h3 className="font-bold">Recent Activity</h3>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex flex-col gap-2">
            <SiImgur
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600 text-white"
            />
            <div className="flex flex-col gap-2 p-2 bg-bg-primary border border-border-color rounded-xs">
              <h3 className="font-bold">Profile Image Updated</h3>
              <p>
                The user updated their profile picture to reflect the latest
                changes. This image will now appear across all modules including
                dashboard, reports, and communication logs.
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
              <p className="text-text-secondary text-xs">2 hours ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <IoDocuments
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600 text-white"
            />
            <div className="flex flex-col gap-2 p-2 bg-bg-primary border border-border-color rounded-xs">
              <h3 className="font-bold">Document Added to Project</h3>
              <p>
                A new document has been successfully added to the assigned
                project folder. This file is now available for all collaborators
                with appropriate access rights and can be viewed or downloaded
                from the project resources section.
              </p>
              <p className="flex items-center gap-2">
                Uploaded
                <span className="font-bold">"UX_Research_Notes.pdf"</span>
              </p>
              <div className="flex items-center gap-2 bg-bg-tertiary border border-border-color rounded-xs p-2">
                <FaFilePdf size={18} />
                <span className="font-bold">UX_Research_Notes.pdf</span>
              </div>
              <p className="text-text-secondary text-xs">5 hours ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <IoChatbubbleEllipsesOutline
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600 text-white"
            />
            <div className="flex flex-col gap-2 p-2 bg-bg-primary border border-border-color rounded-xs">
              <h3 className="font-bold">Commented on team update</h3>
              <p>
                The user provided feedback on the latest team progress post
                regarding project milestones. The comment reflects engagement
                and readiness for the upcoming review session.
              </p>
              <p>"Looks great! Let’s review this tomorrow."</p>
              <div className="flex items-center gap-2">
                <img
                  src={avatar1}
                  alt="avatar"
                  className="w-10 h-10 bg-bg-tertiary p-2 rounded-full"
                />
                <img
                  src={avatar2}
                  alt="avatar"
                  className="w-10 h-10 bg-bg-tertiary p-2 rounded-full"
                />
                <img
                  src={avatar3}
                  alt="avatar"
                  className="w-10 h-10 bg-bg-tertiary p-2 rounded-full"
                />
                <p className="text-xs">+2 more</p>
              </div>
              <p className="text-text-secondary text-xs">1 day ago</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <FaFolderOpen
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600 text-white"
            />
            <div className="flex flex-col gap-2 p-2 bg-bg-primary border border-border-color rounded-xs">
              <h3 className="font-bold">Marketing Assets Shared</h3>
              <p>
                The user shared a compressed folder containing brand guidelines,
                logos, and campaign creatives with the entire marketing team.
                Members with access can now download or reference these assets
                in their respective modules.
              </p>
              <p className="flex items-center gap-2">
                Shared with team
                <span className="font-bold">"marketing-assets.zip"</span>
              </p>
              <div className="flex items-center gap-2 bg-bg-tertiary border border-border-color rounded-xs p-2">
                <FaFileZipper size={18} />
                <span className="font-bold">marketing-assets.zip (6.9 MB)</span>
              </div>
              <p className="text-text-secondary text-xs">27 Jan 2026</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <FaUsers
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600 text-white"
            />
            <div className="flex flex-col gap-2 p-2 bg-bg-primary border border-border-color rounded-xs">
              <h3 className="font-bold">Joined new team</h3>
              <p>
                The user John Carter was successfully added to the “Marketing
                Strategy Group” to collaborate on campaign planning, content
                development, and cross-platform initiatives.
              </p>
              <div className="flex items-center gap-2">
                <img
                  src={newTeamMember}
                  alt="new team member"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col justify-center gap-2">
                  <span className="font-bold">John Carter</span>
                  <span className="text-text-secondary text-xs">
                    Marketing Specialist
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-xs">25 Jan 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
