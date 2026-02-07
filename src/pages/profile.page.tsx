import React from "react";
import { TbCircleDashedCheck } from "react-icons/tb";

import profileBackground from "../assets/images/profile-bg.jpg";
import avatar from "../assets/images/avatar.jpg";

const Profile: React.FC = () => {
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
            <div className="flex items-center gap-2">
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
    </div>
  );
};

export default Profile;
