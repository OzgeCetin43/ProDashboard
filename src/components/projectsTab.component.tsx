import React from "react";

const ProjectsTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">Active Projects</h3>
      <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-purple-600">Website Redesign 2026</h3>
          <span className="bg-purple-600 px-2 py-1 rounded-xs">
            In Progress
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-neutral-700">25 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-neutral-700">28 Jan 2026</span>
          </p>
        </div>
        <p>
          Revamping the corporate website to enhance user experience and load
          performance. Includes UI/UX, frontend dev, and testing phases.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-neutral-700">
              Tasks: <span>169/236</span>
            </p>
            <p className="text-neutral-700">65% Completed</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-purple-600 rounded-full"
              style={{ width: "65%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $2,750</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-yellow-600">Marketing Campaign Q2</h3>
          <span className="bg-yellow-600 px-2 py-1 rounded-xs">Ongoing</span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-neutral-700">20 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-neutral-700">24 Jan 2026</span>
          </p>
        </div>
        <p>
          Coordinated digital and offline marketing strategies to boost product
          awareness and lead generation during Q2.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-neutral-700">
              Tasks: <span>78/120</span>
            </p>
            <p className="text-neutral-700">65% Completed</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-yellow-600 rounded-full"
              style={{ width: "65%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $100</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-blue-600">CRM Integration Project</h3>
          <span className="bg-blue-600 px-2 py-1 rounded-xs">
            Pending Review
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-neutral-700">20 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-neutral-700">28 Jan 2026</span>
          </p>
        </div>
        <p>
          Seamlessly integrating a new CRM platform with existing infrastructure
          for improved sales tracking and customer engagement workflows.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-neutral-700">
              Tasks: <span>102/135</span>
            </p>
            <p className="text-neutral-700">75% Completed</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $775</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-neutral-950 p-2 rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-green-600">Mobile App Launch</h3>
          <span className="bg-green-600 px-2 py-1 rounded-xs">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-neutral-700">24 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-neutral-700">24 Jan 2026</span>
          </p>
        </div>
        <p>
          Development and deployment of the company’s flagship mobile app,
          including backend integration, QA, and app store submissions.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-neutral-700">
              Tasks: <span>220/220</span>
            </p>
            <p className="text-neutral-700">100% Completed</p>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-600 rounded-full"
              style={{ width: "100%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $12,500</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <p>4 of 20</p>
      </div>
      <div className="flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 bg-neutral-700 rounded-full m-1 flex items-center justify-center ${index === 0 ? "bg-sky-600" : ""} cursor-pointer`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
