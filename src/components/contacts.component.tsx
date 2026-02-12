import React from "react";

const Contacts: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-2 bg-bg-secondary rounded-xs text-text-primary h-full overflow-y-auto">
      <div className="flex items-center  gap-2 hover:bg-bg-tertiary p-2 rounded-xs cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-accent-primary p-1 flex items-center justify-center font-bold text-white">
          AC
        </div>
        <span className="text-xs">Alice Cruickshank</span>
      </div>
      <div className="flex items-center  gap-2 hover:bg-bg-tertiary p-2 rounded-xs cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-accent-primary p-1 flex items-center justify-center font-bold text-white">
          BE
        </div>
        <span className="text-xs">Bernard Erdmann</span>
      </div>
      <div className="flex items-center  gap-2 hover:bg-bg-tertiary p-2 rounded-xs cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-accent-primary p-1 flex items-center justify-center font-bold text-white">
          CT
        </div>
        <span className="text-xs">Christine Thygesen</span>
      </div>
      <div className="flex items-center  gap-2 hover:bg-bg-tertiary p-2 rounded-xs cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-accent-primary p-1 flex items-center justify-center font-bold text-white">
          EE
        </div>
        <span className="text-xs">Elon Evans</span>
      </div>
    </div>
  );
};

export default Contacts;
