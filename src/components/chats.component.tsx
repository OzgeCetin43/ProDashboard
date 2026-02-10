import React from "react";
import { FaPlus } from "react-icons/fa";

import avatar1 from "../assets/images/avatar-1.webp";
import avatar2 from "../assets/images/avatar-2.webp";
import avatar3 from "../assets/images/avatar-3.webp";
import avatar4 from "../assets/images/avatar-4.webp";
import avatar5 from "../assets/images/avatar-5.webp";

const Chats: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-neutral-800 rounded-xs">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xs font-bold">Direct Messages</h3>
        <FaPlus
          size={12}
          className="text-orange-600 hover:text-sky-600 cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-2 bg-orange-600 rounded-xs p-2 hover:bg-neutral-950">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1">
          <img src={avatar1} alt="avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">Clifford Taylor</span>
          <span className="text-xs text-neutral-600">Hello Cameron!</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-xs hover:bg-neutral-950">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1">
          <img src={avatar2} alt="avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">Frank Thomas</span>
          <span className="text-xs text-neutral-600">How are you today?</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-xs hover:bg-neutral-950">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1">
          <img src={avatar3} alt="avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">Lisa Ray</span>
          <span className="text-xs text-neutral-600">I'm fine, thank you!</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-xs hover:bg-neutral-950">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1">
          <img src={avatar4} alt="avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">Adam Grey</span>
          <span className="text-xs text-neutral-600">What's up?</span>
        </div>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-xs hover:bg-neutral-950">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1">
          <img src={avatar5} alt="avatar" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold">Thomas White</span>
          <span className="text-xs text-neutral-600">Hey, are you free?</span>
        </div>
      </div>
    </div>
  );
};

export default Chats;
