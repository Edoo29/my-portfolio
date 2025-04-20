import { FaCopyright } from "react-icons/fa";
import { motion } from "motion/react";

export default function Copyright() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      exit={{ opacity: 0, y: 80 }}
      id="copyright"
    >
      <FaCopyright /> 2025 Edoardo Zaffaroni - All rights reserved
    </motion.div>
  );
}
