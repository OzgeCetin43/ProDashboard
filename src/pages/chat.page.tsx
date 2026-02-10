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
      <div className="w-full p-2 flex flex-col md:flex-row justify-between bg-[#212121] rounded-xs gap-2 h-auto md:h-[90vh]">
        <div className="flex-1 flex flex-col gap-2 bg-neutral-950 p-2 border border-neutral-700 rounded-xs">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold">Chats</h3>
            <FaPlus
              size={18}
              className="w-7 h-7 hover:bg-orange-600 hover:text-white cursor-pointer text-orange-600 p-2 border border-orange-600 rounded-xs"
            />
          </div>
          <p className="text-xs text-neutral-600">
            Stay updated with your store’s performance today. Get a quick
            snapshot of key statistics.
          </p>
          <div className="flex items-center gap-2 border border-neutral-700 rounded-xs p-2">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full text-xs outline-none h-full w-full"
            />
            <FaSearch
              size={18}
              className="bg-neutral-400 text-neutral-950 p-1 rounded-full hover:bg-sky-600 hover:text-white cursor-pointer"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("chats")}
              className={`px-2 py-1 rounded-xs text-xs ${activeTab === "chats" ? "bg-sky-600" : ""}`}
            >
              Chats
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-2 py-1 rounded-xs text-xs ${activeTab === "contacts" ? "bg-sky-600" : ""}`}
            >
              Contacts
            </button>
          </div>
          {activeTab === "chats" && <Chats />}
          {activeTab === "contacts" && <Contacts />}
        </div>
        <div className="flex-3 flex flex-col gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center justify-between gap-2 border-b border-neutral-700 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-sky-600 p-1">
                <img src={avatar1} alt="avatar" className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold">Clifford Taylor</span>
                <span className="text-xs text-neutral-600">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaVideo
                size={32}
                className="p-2 rounded-xs bg-sky-600 hover:bg-orange-600 cursor-pointer"
              />
              <FaPhone
                size={32}
                className="p-2 rounded-xs bg-sky-600 hover:bg-orange-600 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 h-full">
            <div className="flex gap-2">
              <img
                src={avatar1}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-sky-600 p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-orange-600 rounded-xs p-2 w-fit">
                  Hi Cameron!
                </p>
                <span className="text-xs text-neutral-600">09:02 PM</span>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src={avatar1}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-sky-600 p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-orange-600 rounded-xs p-2 w-fit">
                  How are you today?
                </p>
                <span className="text-xs text-neutral-600">09:02 PM</span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-orange-600 p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-sky-600 rounded-xs p-2 w-fit">
                  I'm fine, thank you!
                </p>
                <span className="text-xs text-neutral-600 text-right">
                  09:05 PM
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-orange-600 p-2"
              />
              <div className="flex flex-col gap-2">
                <p className="text-xs bg-sky-600 rounded-xs p-2 w-fit">
                  Here my project
                </p>
                <span className="text-xs text-neutral-600 text-right">
                  09:06 PM
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-2">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full bg-orange-600 p-2"
              />
              <div className="flex flex-col gap-2">
                <img
                  src={project}
                  alt="project"
                  className="w-50 h-50 rounded-xs bg-sky-600 p-2 w-fit"
                />
                <span className="text-xs text-neutral-600 text-right">
                  09:06 PM
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-neutral-700 rounded-xs p-2 text-xs outline-none"
            />
            <button className="rounded-xs p-2 bg-sky-600 hover:bg-orange-600 cursor-pointer text-xs">
              Send
            </button>
            <input type="file" ref={fileInputRef} className="hidden" />
            <AiOutlinePicture
              size={30}
              className="cursor-pointer p-2 bg-orange-600 rounded-xs"
              onClick={() => fileInputRef.current?.click()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
