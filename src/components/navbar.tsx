import { motion } from "motion/react";
import { useState } from "react";

const navbarItems: string[] = ["Work", "About", "Contact"];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      id="navbar"
    >
      <ul id="navbar-list">
        {navbarItems.map((item, idx) => (
          <NavbarItem key={idx}>{item}</NavbarItem>
        ))}
      </ul>
    </motion.nav>
  );
}

function NavbarItem({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const formattedChildren = children?.toString().toLowerCase();
  const fragmentHref = `#${formattedChildren}`;

  return (
    <motion.li
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a className="navbar-item" href={fragmentHref} rel="noopener">
        {children}
      </a>
      <motion.div
        className={`navbar-item-border ${
          isHovered ? "hovered" : "not-hovered"
        }`}
      ></motion.div>
    </motion.li>
  );
}
