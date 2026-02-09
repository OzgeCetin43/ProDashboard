import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa";
import {
  IoChatbubblesOutline,
  IoWallet,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineTask, MdLogout } from "react-icons/md";
import { IoMdHelp } from "react-icons/io";

type ProfileProps = {
  setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Profile: React.FC<ProfileProps> = ({ setIsProfileOpen }) => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-neutral-800 border border-neutral-700 p-2 w-60 rounded-xs cursor-pointer text-xs">
      <h6 className="font-bold bg-orange-600 p-2 rounded-xs">
        Welcome Cameron!
      </h6>
      <Link
        to="/profile-simple-page"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <FaRegUser size={18} />
        Profile
      </Link>
      <Link
        to="/chat-app"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoChatbubblesOutline size={18} />
        Messages
      </Link>
      <Link
        to="/taskboard"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <MdOutlineTask size={18} />
        Taskboard
      </Link>
      <Link
        to="/help"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoMdHelp size={18} />
        Help
      </Link>
      <div className="w-full h-[1px] bg-neutral-700"></div>
      <Link
        to="/balance"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoWallet size={18} />
        <span>Balance: </span>
        <span className="font-bold text-md">$5971.67</span>
      </Link>
      <Link
        to="/settings"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoSettingsOutline size={18} />
        Help
      </Link>
      <Link
        to="/lock-screen-basic-authentication"
        className="flex items-center gap-2 hover:bg-neutral-600 px-2 py-1 rounded-xs"
        onClick={() => setIsProfileOpen(false)}
      >
        <FaLock size={18} />
        Lock Screen
      </Link>
      <Link
        to="/sign-in-basic-authentication"
        className="flex items-center gap-2 font-bold hover:bg-orange-600 px-2 py-1 rounded-xs bg-sky-600"
        onClick={() => setIsProfileOpen(false)}
      >
        <MdLogout size={18} />
        Logout
      </Link>
    </div>
  );
};

export default Profile;
