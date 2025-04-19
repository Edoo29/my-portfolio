import { FaArrowDown } from "react-icons/fa";
import { RoadmapItemProps, RoadmapItemType } from "../types";
import { motion } from "motion/react";

const roadmapItems: RoadmapItemType[] = [
  {
    year: 2022,
    title: "Start learning HTML and CSS",
    description:
      "I started to study HTML and CSS by following videos on youtube",
    color: "black",
  },
  {
    year: 2023,
    title: "Tried to study something else",
    description: "I started to study C++ and Python to find what I like more",
    color: "blue",
  },
  {
    year: 2023,
    title: "Started to study JavaScript",
    description: "I started to study JavaScript",
    color: "orange",
  },
  {
    year: 2023,
    title: "Improvements",
    description: "I saw something about React and started TailwindCSS",
    color: "red",
  },
  {
    year: 2024,
    title: "Improved HTML and CSS",
    description:
      "I improved my HTML and CSS knowledge studying SEO and Accessibility",
    color: "green",
  },
  {
    year: 2024,
    title: "Started to study React and TypeScript",
    description: "I started to study React and TypeScript to improve my skills",
    color: "pink",
  },
  {
    year: 2024,
    title: "Discovered new technologies",
    description:
      "Tried to study more technologies like Next.js, DBs with ORMs and more",
    color: "violet",
  },
  {
    year: 2025,
    title: "In-depth study of React, Typescript and SCSS",
    description: "I started to study Node.js to improve my skills",
    color: "black",
  },
];

export default function Roadmap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 }}
      id="roadmap"
    >
      {roadmapItems.map((item, idx) => (
        <RoadmapItem idx={idx} key={idx} {...item} />
      ))}
    </motion.div>
  );
}

function RoadmapItem({ year, title, description, color }: RoadmapItemProps) {
  return (
    <div className={`roadmap-item ${color}`}>
      <h2>{year}</h2>
      <h3>{title}</h3>
      <p>{description}</p>

      <FaArrowDown className="scroll-down-arrow" />
    </div>
  );
}
