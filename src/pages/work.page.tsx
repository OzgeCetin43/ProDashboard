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
    <div className="flex flex-col gap-2 p-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-xs">8 Works available</h3>
        <div className="flex items-center gap-2">
          <IoIosGrid
            size={18}
            className={`w-8 h-8 p-2 bg-neutral-600 hover:bg-sky-600 cursor-pointer rounded-xs ${isGrid ? "bg-orange-600" : ""}`}
            onClick={() => setIsGrid(true)}
          />
          <FaGripLines
            size={18}
            className={`w-8 h-8 p-2 bg-neutral-600 hover:bg-sky-600 cursor-pointer rounded-xs ${!isGrid ? "bg-orange-600" : ""}`}
            onClick={() => setIsGrid(false)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        {works.map((work) => (
          <div
            key={work.id}
            className={`flex ${isGrid ? "w-full md:w-[33%] flex-col" : "w-full flex-col md:flex-row items-center justify-between"} gap-2 p-2 bg-[#1a1a1a] rounded-xs border border-neutral-700`}
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
                <span className="text-xs font-bold">{work.assignee}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <AiFillLike
                  size={18}
                  className="w-8 h-8 p-2 bg-sky-600 hover:bg-orange-600 cursor-pointer rounded-xs"
                />
                <span>{work.like}</span>
                <FaMessage
                  size={18}
                  className="w-8 h-8 p-2 bg-orange-600 hover:bg-sky-600 cursor-pointer rounded-xs"
                />
                <span>{work.comment}</span>
              </div>
            </div>
          </div>
        ))}
        <div
          className={`flex flex-col items-center justify-center gap-2 ${isGrid ? "w-full md:w-[33%]" : "w-full"} p-2 bg-neutral-950 rounded-xs border border-neutral-700`}
        >
          <LuRocket size={32} className="text-orange-600" />
          <h3>Offer a Work</h3>
          <p className="text-xs">Ignite Professional Adventures</p>
          <button className="w-fit p-2 bg-sky-600 hover:bg-orange-600 cursor-pointer rounded-xs text-xs font-bold">
            Offer a Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
