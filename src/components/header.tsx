import { motion } from "motion/react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      exit={{ opacity: 0, y: -80 }}
      className="header"
    >
      {children}
    </motion.header>
  );
}
