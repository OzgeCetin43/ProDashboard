import React from "react";

import { notifications } from "../assets/data/notification.data";

type NotificationProps = {
  setIsNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Notification: React.FC<NotificationProps> = ({
  setIsNotificationOpen,
}) => {
  return (
    <div className="bg-neutral-800 border border-neutral-700 p-2 w-60 rounded-xs">
      {notifications.map((notification) => {
        const Icon = notification.icon;
        return (
          <div
            key={notification.id}
            className="flex gap-2 p-2 hover:bg-neutral-600 rounded-xs mb-2"
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
        className="text-xs bg-sky-600 w-full p-2 font-bold rounded-xs cursor-pointer"
        onClick={() => setIsNotificationOpen(false)}
      >
        See All Notifications
      </button>
    </div>
  );
};

export default Notification;
