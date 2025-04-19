import { motion } from "motion/react";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="paragraph"
    >
      {children}
    </motion.p>
  );
}
