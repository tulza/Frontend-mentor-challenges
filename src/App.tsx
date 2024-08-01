import { AnimatePresence } from "framer-motion";
import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";

import Test from "./Template/Test";
import QRCODECOMPONENT from "./qr-code-component/QRCODECOMPONENT";

// type Challange = {
//   name:  string;
//   link: string;
//   element: React.ReactNode;
// };
type Challange = { [key: string]: { path: string; element: React.ReactNode } };

const mapChallanges: Challange = {
  qrCodeComponent: { path: "/qr-code-component", element: <QRCODECOMPONENT /> },
  qrCodeComponent2: { path: "/qr-code-component-2", element: <QRCODECOMPONENT /> },
};

function App() {
  return (
    <>
      <Router>
        <AnimatePresence mode="wait">
          <div className="flex gap-4 absolute">
            {Object.keys(mapChallanges).map((key) => (
              <Link to={mapChallanges[key].path} key={key}>
                <div className="p-4 bg-black text-white text-bold rounded-lg">{key}</div>
              </Link>
            ))}
          </div>
          <Routes location={location} key={location.pathname}>
            <Route index element={<QRCODECOMPONENT />} />
            {Object.keys(mapChallanges).map((key) => (
              <Route
                path={mapChallanges[key].path}
                element={mapChallanges[key].element}
                key={key}
              />
            ))}
            <Route path="/*" element={<Test n={5} />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
