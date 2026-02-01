import React from "react";

import { inbox } from "../assets/data/inbox.data";

type InboxProps = {
  setIsInboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Inbox: React.FC<InboxProps> = ({ setIsInboxOpen }) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 p-2 w-60 rounded-xs cursor-pointer">
      {inbox.map((box) => {
        return (
          <div
            key={box.id}
            className="flex gap-2 p-2 hover:bg-neutral-600 rounded-xs mb-2"
          >
            <img src={box.avatar} alt={box.name} className="w-8 h-8" />
            <div className="flex justify-between gap-2 text-xs">
              <div className="p-2">
                <h3 className="font-bold">{box.name}</h3>
                <p>{box.message}</p>
              </div>
              <span className="p-2">{box.time}</span>
            </div>
          </div>
        );
      })}
      <button
        className="text-xs bg-orange-600 w-full p-2 font-bold rounded-xs cursor-pointer"
        onClick={() => setIsInboxOpen(false)}
      >
        See All Messages
      </button>
    </div>
  );
};

export default Inbox;
