import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Transition from "./common/components/Transition";
import { Challanges } from "./data/challanges";
import HomePage from "./Pages/home";
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Transition page={<HomePage />} />} />
        {...Challanges.map((challange) => (
          <Route path={challange.path} element={<Transition page={challange.element} />} />
        ))}
        <Route path="*" element={<Transition page={<NotFound />} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
