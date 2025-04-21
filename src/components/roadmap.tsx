import { FaArrowDown, FaArrowUp, FaArrowsAltV } from "react-icons/fa";
import { RoadmapItemProps } from "../types";
import { motion } from "motion/react";
import { roadmapItems } from "../data";

export default function Roadmap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
      exit={{ opacity: 0, x: 80 }}
      id="roadmap"
    >
      {roadmapItems.map((item, idx) => (
        <RoadmapItem idx={idx} key={idx} {...item} />
      ))}
    </motion.div>
  );
}

function RoadmapItem({
  year,
  title,
  description,
  color,
  idx,
}: RoadmapItemProps) {
  return (
    <div className={`roadmap-item ${color}`}>
      <h2>{year}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
      {idx === 0 ? (
        <>
          <span>(Scroll inside this box)</span>
          <FaArrowDown className="arrow" />
        </>
      ) : idx === roadmapItems.length - 1 ? (
        <FaArrowUp className="arrow" />
      ) : (
        <FaArrowsAltV className="arrow" />
      )}
    </div>
  );
}
