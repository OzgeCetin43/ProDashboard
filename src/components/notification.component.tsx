import React from "react";

import { notifications } from "../assets/data/notification.data";

type NotificationProps = {
  setIsNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Notification: React.FC<NotificationProps> = ({
  setIsNotificationOpen,
}) => {
  return (
    <div className="bg-bg-secondary border border-border-color p-2 w-60 rounded-xs shadow-lg text-text-primary">
      {notifications.map((notification) => {
        const Icon = notification.icon;
        return (
          <div
            key={notification.id}
            className="flex gap-2 p-2 hover:bg-bg-tertiary rounded-xs mb-2 cursor-pointer transition-colors"
          >
            <Icon
              className={`mt-2 h-8 w-8 p-1 ${notification.iconClass} rounded-xs`}
            />
            <div className="flex justify-between gap-2 text-xs">
              <div className="p-2">
                <h3 className="font-bold">{notification.title}</h3>
                <p>{notification.description}</p>
              </div>
              <span className="p-2">{notification.time}</span>
            </div>
          </div>
        );
      })}
      <button
        className="text-xs bg-accent-primary hover:bg-accent-hover text-white w-full p-2 font-bold rounded-xs cursor-pointer transition-colors"
        onClick={() => setIsNotificationOpen(false)}
      >
        See All Notifications
      </button>
    </div>
  );
};

export default Notification;
