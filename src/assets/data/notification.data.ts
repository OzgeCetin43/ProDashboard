import { nanoid } from "nanoid";
import type { IconType } from "react-icons";
import { BiSolidDashboard } from "react-icons/bi";
import { IoCalendarOutline, IoSettings } from "react-icons/io5";
import { TbBlocks } from "react-icons/tb";

type NotificationType = {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  time: string;
  iconClass: string;
};

export const notifications: NotificationType[] = [
  {
    id: nanoid(),
    icon: BiSolidDashboard,
    title: "Launch Admin",
    description: "Just see the my admin!",
    time: "9:30 AM",
    iconClass: "bg-status-success text-white",
  },
  {
    id: nanoid(),
    icon: IoCalendarOutline,
    title: "Event Today",
    description: "Just a reminder that you have event",
    time: "9:15 AM",
    iconClass: "bg-status-info text-white",
  },
  {
    id: nanoid(),
    icon: IoSettings,
    title: "Settings",
    description: "You can customize this template",
    time: "4:33 AM",
    iconClass: "bg-status-warning text-white",
  },
  {
    id: nanoid(),
    icon: TbBlocks,
    title: "Launch Templates",
    description: "Just see the my new admin!",
    time: "7:30 AM",
    iconClass: "bg-status-success text-white",
  },
  {
    id: nanoid(),
    icon: IoCalendarOutline,
    title: "Event Tomorrow",
    description: "Just a reminder that you have event",
    time: "6:03 AM",
    iconClass: "bg-status-error text-white",
  },
];
