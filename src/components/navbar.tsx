import { motion } from "motion/react";
import { useState } from "react";

const navbarItems: string[] = ["Work", "About", "Contact"];

export default function Navbar() {
  return (
    <nav id="navbar">
      <ul id="navbar-list">
        {navbarItems.map((item, idx) => (
          <NavbarItem key={idx}>{item}</NavbarItem>
        ))}
      </ul>
    </nav>
  );
}

function NavbarItem({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.li
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className={`navbar-item-border ${
          isHovered ? "is-hovered" : "is-not-hovered"
        }`}
      ></motion.div>
    </motion.li>
  );
}
