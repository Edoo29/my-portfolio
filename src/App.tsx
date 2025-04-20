import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./routes/homepage";
import { AnimatePresence } from "motion/react";
import Work from "./routes/work";
import About from "./routes/about";
import Contact from "./routes/contact";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
