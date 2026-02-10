import React, { useState } from "react";
import { IoIosGrid } from "react-icons/io";
import { FaGripLines } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
import { LuRocket } from "react-icons/lu";

import { works } from "../assets/data/works.data";

const Work: React.FC = () => {
  const [isGrid, setIsGrid] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-2 p-2 text-text-primary">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-xs">8 Works available</h3>
        <div className="flex items-center gap-2">
          <IoIosGrid
            size={18}
            className={`w-8 h-8 p-2 bg-bg-tertiary hover:bg-accent-primary hover:text-white cursor-pointer rounded-xs transition-colors ${isGrid ? "bg-accent-primary text-white" : "text-text-primary"}`}
            onClick={() => setIsGrid(true)}
          />
          <FaGripLines
            size={18}
            className={`w-8 h-8 p-2 bg-bg-tertiary hover:bg-accent-primary hover:text-white cursor-pointer rounded-xs transition-colors ${!isGrid ? "bg-accent-primary text-white" : "text-text-primary"}`}
            onClick={() => setIsGrid(false)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {works.map((work) => (
          <div
            key={work.id}
            className={`flex ${isGrid ? "w-full md:w-[33%] flex-col" : "w-full flex-col md:flex-row items-center justify-between"} gap-2 p-2 bg-bg-secondary rounded-xs border border-border-color shadow-sm`}
          >
            <img
              src={work.image}
              alt="work"
              className={`rounded-xs ${isGrid ? "w-full h-full" : "w-full md:w-1/2 h-60"} object-cover`}
            />
            <h3 className="font-bold">{work.title}</h3>
            <div
              className={`flex items-center justify-between ${isGrid ? "gap-2" : "flex-col gap-4"}`}
            >
              <div
                className={`flex items-center gap-2 ${isGrid ? "" : "flex-col"}`}
              >
                <img
                  src={work.assigneeImg}
                  alt="assignee"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-xs font-bold text-text-primary">
                  {work.assignee}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <AiFillLike
                  size={18}
                  className="w-8 h-8 p-2 bg-accent-primary hover:bg-accent-hover cursor-pointer rounded-xs text-white transition-colors"
                />
                <span>{work.like}</span>
                <FaMessage
                  size={18}
                  className="w-8 h-8 p-2 bg-text-secondary hover:bg-text-primary cursor-pointer rounded-xs text-white transition-colors"
                />
                <span>{work.comment}</span>
              </div>
            </div>
          </div>
        ))}
        <div
          className={`flex flex-col items-center justify-center gap-2 ${isGrid ? "w-full md:w-[33%]" : "w-full"} p-2 bg-bg-primary rounded-xs border border-border-color`}
        >
          <LuRocket size={32} className="text-accent-primary" />
          <h3 className="font-bold">Offer a Work</h3>
          <p className="text-xs text-text-secondary">
            Ignite Professional Adventures
          </p>
          <button className="w-fit p-2 bg-accent-primary hover:bg-accent-hover cursor-pointer rounded-xs text-xs font-bold text-white transition-colors">
            Offer a Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
