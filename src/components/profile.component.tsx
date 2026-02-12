import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa";
import {
  IoChatbubblesOutline,
  IoWallet,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineTask, MdLogout, MdOutlineSecurity } from "react-icons/md";

type ProfileProps = {
  setIsProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Profile: React.FC<ProfileProps> = ({ setIsProfileOpen }) => {
  return (
    <div className="flex flex-col justify-center gap-2 bg-bg-secondary border border-border-color p-2 w-60 rounded-xs cursor-pointer text-xs shadow-lg text-text-primary">
      <h6 className="font-bold bg-accent-primary text-white p-2 rounded-xs">
        Welcome Cameron!
      </h6>
      <Link
        to="/profile-simple-page"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <FaRegUser size={18} />
        Profile
      </Link>
      <Link
        to="/chat-app"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoChatbubblesOutline size={18} />
        Messages
      </Link>
      <Link
        to="/works"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <MdOutlineTask size={18} />
        Works
      </Link>
      <Link
        to="/security"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <MdOutlineSecurity size={18} />
        Security
      </Link>
      <div className="w-full h-[1px] bg-border-color"></div>
      <Link
        to="/balance"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoWallet size={18} />
        <span>Balance: </span>
        <span className="font-bold text-md">$5971.67</span>
      </Link>
      <Link
        to="/settings"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <IoSettingsOutline size={18} />
        Settings
      </Link>
      <Link
        to="/lock-screen-basic-authentication"
        className="flex items-center gap-2 hover:bg-bg-tertiary px-2 py-1 rounded-xs transition-colors"
        onClick={() => setIsProfileOpen(false)}
      >
        <FaLock size={18} />
        Lock Screen
      </Link>
      <Link
        to="/sign-in-basic-authentication"
        className="flex items-center gap-2 font-bold hover:bg-accent-hover px-2 py-1 rounded-xs bg-accent-primary text-white"
        onClick={() => setIsProfileOpen(false)}
      >
        <MdLogout size={18} />
        Logout
      </Link>
    </div>
  );
};

export default Profile;
