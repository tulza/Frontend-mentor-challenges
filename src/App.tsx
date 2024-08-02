import { Link, Route, Routes, useLocation } from "react-router-dom";

import QRCODECOMPONENT from "./qr-code-component/QRCODECOMPONENT";
import Home from "./home/Home";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Challange = { label: string; path: string; element: React.ReactNode };

export const mapChallanges: Challange[] = [
  { label: "QRcode component", path: "/qr-code-component", element: <QRCODECOMPONENT /> },
];

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        {location.pathname !== "/" && (
          <div className="absolute z-[9999] flex w-full">
            <Link to="/">
              <motion.button
                initial={{ scale: 0, filter: "blur(64px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                exit={{ scale: 0, filter: "blur(64px)" }}
                className="text-bold grid aspect-square size-16 origin-top-left place-items-center rounded-br-full bg-white pb-4 pr-4 text-5xl text-white shadow-lg"
              >
                <ArrowLeft className="stroke-gray-600" />
              </motion.button>
            </Link>
          </div>
        )}
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          {...mapChallanges.map((challange) => (
            <Route path={challange.path} element={challange.element} />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
