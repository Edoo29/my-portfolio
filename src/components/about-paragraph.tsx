import { motion } from "motion/react";

export default function AboutParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
      exit={{ opacity: 0, x: -80 }}
      className="about-paragraph"
    >
      {children}
    </motion.p>
  );
}
