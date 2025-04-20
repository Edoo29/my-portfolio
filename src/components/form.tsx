import { motion } from "motion/react";

export default function Form() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
      exit={{ opacity: 0, y: 100 }}
      id="form"
    >
      <div id="inputs-container">
        <input className="input" type="text" placeholder="Enter your name..." />
        <input
          className="input"
          type="email"
          placeholder="Enter your email..."
        />
      </div>
      <textarea id="textarea" placeholder="Enter your message..."></textarea>
      <motion.input
        whileTap={{ scale: 0.9 }}
        id="button"
        type="submit"
        value={"Send"}
      />
    </motion.form>
  );
}
