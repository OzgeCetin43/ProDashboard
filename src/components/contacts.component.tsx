import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-neutral-800 rounded-xs">
      <div className="flex items-center  gap-2 hover:bg-neutral-950 p-2 rounded-xs">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1 flex items-center justify-center font-bold">
          AC
        </div>
        <span className="text-xs">Alice Cruickshank</span>
      </div>
      <div className="flex items-center  gap-2 hover:bg-neutral-950 p-2 rounded-xs">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1 flex items-center justify-center font-bold">
          BE
        </div>
        <span className="text-xs">Bernard Erdmann</span>
      </div>
      <div className="flex items-center  gap-2 hover:bg-neutral-950 p-2 rounded-xs">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1 flex items-center justify-center font-bold">
          CT
        </div>
        <span className="text-xs">Christine Thygesen</span>
      </div>
      <div className="flex items-center  gap-2 hover:bg-neutral-950 p-2 rounded-xs">
        <div className="w-10 h-10 rounded-full bg-sky-600 p-1 flex items-center justify-center font-bold">
          EE
        </div>
        <span className="text-xs">Elon Evans</span>
      </div>
    </div>
  );
};

export default Contacts;
