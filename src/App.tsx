import { Link, Route, Routes, useLocation } from "react-router-dom";

import QRCODECOMPONENT from "./qr-code-component/QRCODECOMPONENT";
import Home from "./home/Home";
import { ArrowLeft, Component, HomeIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Test from "./Template/Test";
import LinkButton from "./common/LinkButton";

type Challange = { label: string; path: string; element: React.ReactNode };

export const mapChallanges: Challange[] = [
  { label: "QRcode component", path: "/qr-code-component", element: <QRCODECOMPONENT /> },
];

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        {/* back page */}
        {location.pathname !== "/" && (
          <div className="absolute z-[9999] flex w-full" key={location.pathname}>
            <motion.button
              initial={{ scale: 0, filter: "blur(64px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              exit={{ scale: 0, filter: "blur(64px)" }}
              className="text-bold grid aspect-square size-16 origin-top-left place-items-center rounded-br-full bg-white pb-4 pr-4 text-5xl text-white shadow-lg"
              onClick={() => history.back()}
            >
              <ArrowLeft className="stroke-gray-600" />
            </motion.button>
          </div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-4 z-[9999] flex w-dvw justify-center">
        <div className="flex gap-4 rounded-full border bg-white p-2">
          <Link to="/">
            <LinkButton
              icon={<HomeIcon size={20} strokeWidth={1.5} className="mr-2" />}
              label="home"
            />
          </Link>
          <LinkButton
            icon={<Component size={20} strokeWidth={1.5} className="mr-2" />}
            label="Components"
          />
        </div>
      </div>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        {...mapChallanges.map((challange) => (
          <Route path={challange.path} element={challange.element} />
        ))}
        <Route path="*" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
