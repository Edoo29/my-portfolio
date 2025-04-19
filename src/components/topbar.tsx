import { motion } from "motion/react";

export default function Topbar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      id="topbar"
    >
      <Divider />
      <div>FRONTEND DEVELOPER</div>
    </motion.div>
  );
}

export function Divider() {
  return <div className="divider"></div>;
}
