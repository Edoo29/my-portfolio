import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./routes/homepage";
import { AnimatePresence } from "motion/react";
import Work from "./routes/work";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" index element={<Homepage />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
}
