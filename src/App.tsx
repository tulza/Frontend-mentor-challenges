import { AnimatePresence } from "framer-motion";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Test from "./Template/Test";

function App() {
  return (
    <>
      <Router>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Test />} />
            <Route path="/1" element={<Test n={1} />} />
            <Route path="/2" element={<Test n={2} />} />
            <Route path="/3" element={<Test n={3} />} />
            <Route path="/4" element={<Test n={4} />} />
            <Route path="/*" element={<Test n={5} />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
