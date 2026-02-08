import React from "react";
import { SiCodesignal } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { FaCode, FaBug, FaUsers, FaMoneyBillAlt } from "react-icons/fa";
import { CiBarcode } from "react-icons/ci";
import { MdSupportAgent } from "react-icons/md";

const TeamTab: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <SiCodesignal
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-orange-600"
            />
            <h3 className="font-bold">Design Team</h3>
          </div>
          <p>Creative squad responsible for crafting UI/UX across platforms.</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">8 members</span>
            <span className="bg-orange-600 px-2 py-1 rounded-xs">Active</span>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <GrAnnounce
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-blue-600"
            />
            <h3 className="font-bold">Marketing Team</h3>
          </div>
          <p>
            Drives branding, product promotion, and customer engagement
            strategies.
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">12 members</span>
            <span className="bg-blue-600 px-2 py-1 rounded-xs">Active</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <FaCode
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-green-600"
            />
            <h3 className="font-bold">Development Team</h3>
          </div>
          <p>
            Engineering team focused on backend, frontend, and infrastructure
            solutions.
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">25 members</span>
            <span className="bg-green-600 px-2 py-1 rounded-xs">Busy</span>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <CiBarcode
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-yellow-600"
            />
            <h3 className="font-bold">Product Team</h3>
          </div>
          <p>
            Focused on product vision, features, and user-centric improvements.
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">6 members</span>
            <span className="bg-yellow-600 px-2 py-1 rounded-xs">Active</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <FaBug
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-red-600"
            />
            <h3 className="font-bold">QA Team</h3>
          </div>
          <p>
            Ensures product quality through rigorous testing and validation.
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">5 members</span>
            <span className="bg-red-600 px-2 py-1 rounded-xs">Idle</span>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <FaUsers
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-purple-600"
            />
            <h3 className="font-bold">HR Team</h3>
          </div>
          <p>Manages recruitment, employee welfare, and compliance.</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">2 members</span>
            <span className="bg-purple-600 px-2 py-1 rounded-xs">Hiring</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <MdSupportAgent
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-pink-600"
            />
            <h3 className="font-bold">Support Team</h3>
          </div>
          <p>Handles customer issues, feedback, and service excellence.</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">3 members</span>
            <span className="bg-pink-600 px-2 py-1 rounded-xs">Online</span>
          </div>
        </div>
        <div className="w-full flex-1 flex flex-col justify-center gap-2 p-2 bg-neutral-950 border border-neutral-700 rounded-xs">
          <div className="flex items-center gap-2">
            <FaMoneyBillAlt
              size={18}
              className="w-20 h-10 md:w-10 p-2 rounded-xs bg-lime-600"
            />
            <h3 className="font-bold">Finance Team</h3>
          </div>
          <p>Handles budgeting, forecasting, and financial operations.</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-neutral-700">8 members</span>
            <span className="bg-lime-600 px-2 py-1 rounded-xs">Auditing</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <p>8 of 100 Team Members</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-sky-600 hover:bg-orange-600 cursor-pointer rounded-xs p-2 font-bold">
          Load More Team Members
        </button>
      </div>
    </div>
  );
};

export default TeamTab;
