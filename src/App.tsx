import { Route, Routes, useLocation } from "react-router-dom";
import { Challanges } from "./data/challanges";
import HomePage from "./Pages/home";
import NotFound from "./Pages/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />} />
        {...Challanges.map((challange) => <Route path={challange.path} element={challange.element} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
