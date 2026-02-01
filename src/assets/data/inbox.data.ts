import { nanoid } from "nanoid";

import avatar1 from "../images/avatar-1.webp";
import avatar2 from "../images/avatar-2.webp";
import avatar3 from "../images/avatar-3.webp";
import avatar4 from "../images/avatar-4.webp";
import avatar5 from "../images/avatar-5.webp";

type InboxType = {
  id: string;
  avatar: string;
  name: string;
  message: string;
  time: string;
};

export const inbox: InboxType[] = [
  {
    id: nanoid(),
    avatar: avatar1,
    name: "Michell Flintoff",
    message: "Yesterday was great...",
    time: "Just Now",
  },
  {
    id: nanoid(),
    avatar: avatar2,
    name: "Bianca Anderson",
    message: "Nice looking dress you...",
    time: "5 mins ago",
  },
  {
    id: nanoid(),
    avatar: avatar3,
    name: "Andrew Johnson",
    message: "Sent a photo",
    time: "15 mins ago",
  },
  {
    id: nanoid(),
    avatar: avatar4,
    name: "Marry Strokes",
    message: "If I don't like something",
    time: "2 days ago",
  },
  {
    id: nanoid(),
    avatar: avatar5,
    name: "Josh Anderson",
    message: "$230 deducted from account",
    time: "1 year ago",
  },
];
