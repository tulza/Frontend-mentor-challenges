import { Link, Route, Routes } from "react-router-dom";

import QRCODECOMPONENT from "./qr-code-component/QRCODECOMPONENT";
import Home from "./home/Home";

type Challange = { label: string; path: string; element: React.ReactNode };

export const mapChallanges: Challange[] = [
  { label: "QRcode component", path: "/qr-code-component", element: <QRCODECOMPONENT /> },
  { label: "", path: "/qr-code-component-2", element: <QRCODECOMPONENT /> },
];

function App() {
  return (
    <>
      <div className="absolute flex w-full items-center justify-center">
        <Link to="/">
          <button className="text-bold rounded-xl bg-black p-4 text-5xl text-white">home</button>
        </Link>
      </div>
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        {...mapChallanges.map((challange) => (
          <Route path={challange.path} element={challange.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
