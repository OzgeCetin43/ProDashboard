import { nanoid } from "nanoid";

import work1 from "../images/works-1.jpg";
import work2 from "../images/works-2.jpg";
import work3 from "../images/works-3.jpg";
import work4 from "../images/works-4.jpg";
import work5 from "../images/works-5.jpg";
import work6 from "../images/works-6.jpg";
import work7 from "../images/works-7.jpg";
import work8 from "../images/works-8.jpg";
import assignee1 from "../images/assignee-1.png";
import assignee2 from "../images/assignee-2.png";
import assignee3 from "../images/assignee-3.png";
import assignee4 from "../images/assignee-4.png";
import assignee5 from "../images/assignee-5.png";
import assignee6 from "../images/assignee-6.png";
import assignee7 from "../images/assignee-7.png";
import assignee8 from "../images/assignee-8.png";

type Work = {
  id: string;
  image: string;
  title: string;
  assignee: string;
  assigneeImg: string;
  like: number;
  comment: number;
};

export const works: Work[] = [
  {
    id: nanoid(),
    image: work1,
    title: "Urban Dreams",
    assignee: "Coddy Fisher",
    assigneeImg: assignee1,
    like: 24,
    comment: 5,
  },
  {
    id: nanoid(),
    image: work2,
    title: "Whispered Emotions",
    assignee: "Wade Warren",
    assigneeImg: assignee2,
    like: 187,
    comment: 49,
  },
  {
    id: nanoid(),
    image: work3,
    title: "Golden Serenity",
    assignee: "Albert Flores",
    assigneeImg: assignee3,
    like: 60,
    comment: 13,
  },
  {
    id: nanoid(),
    image: work4,
    title: "Mystic Shadows",
    assignee: "Kathryn Murphy",
    assigneeImg: assignee4,
    like: 37,
    comment: 16,
  },
  {
    id: nanoid(),
    image: work5,
    title: "Wild Beauty",
    assignee: "Devon Lane",
    assigneeImg: assignee5,
    like: 625,
    comment: 109,
  },
  {
    id: nanoid(),
    image: work6,
    title: "Timeless Elegance",
    assignee: "Jenny Wilson",
    assigneeImg: assignee6,
    like: 6,
    comment: 1,
  },
  {
    id: nanoid(),
    image: work7,
    title: "Intrepid Travel",
    assignee: "John Smith",
    assigneeImg: assignee7,
    like: 30,
    comment: 22,
  },
  {
    id: nanoid(),
    image: work8,
    title: "We Rise Together",
    assignee: "Adam Cruse",
    assigneeImg: assignee8,
    like: 19,
    comment: 23,
  },
];
