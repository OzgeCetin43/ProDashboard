import React, { useRef, useState } from "react";
import { FaPhone, FaPlus, FaSearch, FaVideo } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";

import Chats from "../components/chats.component";
import Contacts from "../components/contacts.component";

import avatar from "../assets/images/avatar.jpg";
import avatar1 from "../assets/images/avatar-1.webp";
import project from "../assets/images/recent-activity.jpg";

const Chat: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("chats");
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="w-full p-2 flex flex-col md:flex-row justify-between bg-bg-secondary rounded-xs gap-2 h-auto md:h-[90vh] shadow-sm border border-border-color">
        <div className="flex-1 flex flex-col gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-text-primary">Chats</h3>
            <FaPlus
              size={18}
              className="w-7 h-7 hover:bg-accent-primary hover:text-white cursor-pointer text-accent-primary p-2 border border-accent-primary rounded-xs transition-colors"
            />
          </div>
          <p className="text-xs text-text-secondary">
            Stay updated with your store’s performance today. Get a quick
            snapshot of key statistics.
          </p>
          <div className="flex items-center gap-2 border border-border-color rounded-xs p-2 bg-bg-secondary">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full text-xs outline-none h-full bg-transparent text-text-primary placeholder:text-text-secondary"
            />
            <FaSearch
              size={18}
              className="bg-bg-tertiary text-text-primary p-1 rounded-full hover:bg-accent-primary hover:text-white cursor-pointer transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("chats")}
              className={`px-2 py-1 rounded-xs text-xs transition-colors ${activeTab === "chats" ? "bg-accent-primary text-white" : "bg-bg-tertiary text-text-primary hover:bg-bg-secondary"}`}
            >
              Chats
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-2 py-1 rounded-xs text-xs transition-colors ${activeTab === "contacts" ? "bg-accent-primary text-white" : "bg-bg-tertiary text-text-primary hover:bg-bg-secondary"}`}
            >
              Contacts
            </button>
          </div>
          {activeTab === "chats" && <Chats />}
          {activeTab === "contacts" && <Contacts />}
        </div>
        <div className="flex-3 flex flex-col gap-2 p-2 bg-bg-primary border border-border-color rounded-xs text-text-primary">
          <div className="flex items-center justify-between gap-2 border-b border-border-color pb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-accent-primary p-1">
                <img src={avatar1} alt="avatar" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Clifford Taylor</span>
                <span className="text-xs text-text-secondary">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaVideo
                size={32}
                className="p-2 rounded-xs bg-accent-primary text-white hover:bg-accent-hover cursor-pointer transition-colors"
              />
              <FaPhone
                size={32}
                className="p-2 rounded-xs bg-accent-primary text-white hover:bg-accent-hover cursor-pointer transition-colors"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 h-full overflow-y-auto">
            <div className="flex gap-2">
              <img
                src={avatar1}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-accent-primary p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-bg-tertiary rounded-xs p-2 w-fit border border-border-color">
                  Hi Cameron!
                </p>
                <span className="text-xs text-text-secondary">09:02 PM</span>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src={avatar1}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-accent-primary p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-bg-tertiary rounded-xs p-2 w-fit border border-border-color">
                  How are you today?
                </p>
                <span className="text-xs text-text-secondary">09:02 PM</span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-accent-primary p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-accent-primary text-white rounded-xs p-2 w-fit">
                  I'm fine, thank you!
                </p>
                <span className="text-xs text-text-secondary text-right">
                  09:05 PM
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-accent-primary p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-accent-primary text-white rounded-xs p-2 w-fit">
                  Here my project
                </p>
                <span className="text-xs text-text-secondary text-right">
                  09:06 PM
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-accent-primary p-2"
              />
              <div className="flex flex-col gap-2">
                <img
                  src={project}
                  alt="project"
                  className="w-50 h-50 rounded-xs bg-accent-primary p-2 w-fit"
                />
                <span className="text-xs text-text-secondary text-right">
                  09:06 PM
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-2 border-t border-border-color">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-border-color bg-bg-secondary rounded-xs p-2 text-xs outline-none text-text-primary"
            />
            <button className="rounded-xs p-2 bg-accent-primary hover:bg-accent-hover cursor-pointer text-xs text-white transition-colors">
              Send
            </button>
            <input type="file" ref={fileInputRef} className="hidden" />
            <AiOutlinePicture
              size={30}
              className="cursor-pointer p-2 bg-accent-primary text-white rounded-xs hover:bg-accent-hover transition-colors"
              onClick={() => fileInputRef.current?.click()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
