import { motion } from "motion/react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
      exit={{ opacity: 0, y: -100 }}
      className="header"
    >
      {children}
    </motion.header>
  );
}
