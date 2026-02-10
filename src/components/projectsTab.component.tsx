import React from "react";

const ProjectsTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 text-text-primary">
      <h3 className="font-bold">Active Projects</h3>
      <div className="flex flex-col justify-center gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-status-active font-bold">
            Website Redesign 2026
          </h3>
          <span className="bg-status-active text-white px-2 py-1 rounded-xs">
            In Progress
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-text-secondary">25 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-text-secondary">28 Jan 2026</span>
          </p>
        </div>
        <p>
          Revamping the corporate website to enhance user experience and load
          performance. Includes UI/UX, frontend dev, and testing phases.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-text-secondary">
              Tasks: <span>169/236</span>
            </p>
            <p className="text-text-secondary">65% Completed</p>
          </div>
          <div className="w-full h-2 bg-bg-tertiary rounded-full">
            <div
              className="h-2 bg-status-active rounded-full"
              style={{ width: "65%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $2,750</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-status-warning font-bold">
            Marketing Campaign Q2
          </h3>
          <span className="bg-status-warning text-white px-2 py-1 rounded-xs">
            Ongoing
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-text-secondary">20 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-text-secondary">24 Jan 2026</span>
          </p>
        </div>
        <p>
          Coordinated digital and offline marketing strategies to boost product
          awareness and lead generation during Q2.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-text-secondary">
              Tasks: <span>78/120</span>
            </p>
            <p className="text-text-secondary">65% Completed</p>
          </div>
          <div className="w-full h-2 bg-bg-tertiary rounded-full">
            <div
              className="h-2 bg-status-warning rounded-full"
              style={{ width: "65%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $100</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-status-info font-bold">
            CRM Integration Project
          </h3>
          <span className="bg-status-info text-white px-2 py-1 rounded-xs">
            Pending Review
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-text-secondary">20 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-text-secondary">28 Jan 2026</span>
          </p>
        </div>
        <p>
          Seamlessly integrating a new CRM platform with existing infrastructure
          for improved sales tracking and customer engagement workflows.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-text-secondary">
              Tasks: <span>102/135</span>
            </p>
            <p className="text-text-secondary">75% Completed</p>
          </div>
          <div className="w-full h-2 bg-bg-tertiary rounded-full">
            <div
              className="h-2 bg-status-info rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <p className="font-bold text-md">Budget: $775</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2 bg-bg-primary p-2 border border-border-color rounded-xs">
        <div className="flex items-center justify-between">
          <h3 className="text-status-success font-bold">Mobile App Launch</h3>
          <span className="bg-status-success text-white px-2 py-1 rounded-xs">
            Completed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>
            Start: <span className="text-text-secondary">24 Jan 2026</span>
          </p>
          <p>
            End: <span className="text-text-secondary">24 Jan 2026</span>
          </p>
        </div>
        <p>
          Development and deployment of the company’s flagship mobile app,
          including backend integration, QA, and app store submissions.
        </p>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between">
            <p className="text-text-secondary">
              Tasks: <span>220/220</span>
            </p>
            <p className="text-text-secondary">100% Completed</p>
          </div>
          <div className="w-full h-2 bg-bg-tertiary rounded-full">
            <div
              className="h-2 bg-status-success rounded-full"
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
            className={`w-8 h-8 rounded-full m-1 flex items-center justify-center cursor-pointer transition-colors ${index === 0 ? "bg-accent-primary text-white" : "bg-bg-tertiary text-text-primary hover:bg-bg-primary"}`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsTab;
