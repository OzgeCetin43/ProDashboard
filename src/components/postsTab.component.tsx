import React, { useRef } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegHeart, FaShare } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

import avatar from "../assets/images/avatar.jpg";
import post1 from "../assets/images/post-1.jpg";
import post2 from "../assets/images/post-2.jpg";
import post3 from "../assets/images/post-3.jpg";
import post4 from "../assets/images/post-4.jpg";

const PostsTab: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
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
          <img src={avatar} alt="avatar" className="w-20 h-20 rounded-xs" />
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
  );
};

export default PostsTab;
