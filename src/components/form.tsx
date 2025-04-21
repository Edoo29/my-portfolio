import { useState } from "react";
import { motion } from "motion/react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSubject(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const checkFields = () => {
    if (email === "" || name === "" || subject === "" || message === "") {
      return false;
    }
    return true;
  };

  const mail = `${
    checkFields()
      ? `mailto:edodev29@gmail.com?subject=${subject}&body=${message}`
      : "#"
  }`;

  return (
    <form id="form">
      <motion.input
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
        exit={{ opacity: 0, y: -100 }}
        onChange={handleEmailChange}
        className="input"
        placeholder="Email"
        type="email"
      />
      <div id="inputs-container">
        <motion.input
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
          exit={{ opacity: 0, x: -100 }}
          onChange={handleNameChange}
          className="input"
          placeholder="Name"
          type="text"
        />
        <motion.input
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
          exit={{ opacity: 0, x: 100 }}
          onChange={handleSubjectChange}
          className="input"
          placeholder="Subject"
          type="text"
        />
      </div>
      <motion.textarea
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
        exit={{ opacity: 0, x: 100 }}
        onChange={handleMessageChange}
        id="textarea"
        placeholder="Message"
        rows={5}
        cols={33}
      ></motion.textarea>
      <motion.a
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
        exit={{ opacity: 0, y: 100 }}
        href={mail}
        id="send-email-button"
        rel="Send email"
      >
        Send
      </motion.a>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
        exit={{ opacity: 0, y: 100 }}
        hidden={checkFields()}
        style={{ color: "red" }}
      >
        Please fill all the fields
      </motion.div>
      <motion.p
        id="contact-paragraph"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
        exit={{ opacity: 0, x: 100 }}
      >
        You can directly reach me at edodev29@gmail.com
      </motion.p>
    </form>
  );
}
