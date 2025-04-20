import { motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ items }: { items: string[] }) {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
      exit={{ opacity: 0, x: -200 }}
      id="navbar"
    >
      <ul id="navbar-list">
        {items.map((item, idx) => (
          <NavbarItem key={idx}>{item}</NavbarItem>
        ))}
      </ul>
    </motion.nav>
  );
}

function NavbarItem({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const formattedChildren = children?.toString().toLowerCase();
  const link = `/${formattedChildren === "home" ? "" : formattedChildren}`;

  return (
    <motion.li
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <NavLink className="navbar-item" to={link} rel="noopener">
        {children}
      </NavLink>
      <motion.div
        className={`navbar-item-border ${
          isHovered ? "hovered" : "not-hovered"
        }`}
      ></motion.div>
    </motion.li>
  );
}
