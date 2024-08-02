import { Link } from "react-router-dom";
import { mapChallanges } from "../App";

const Home = () => {
  return (
    <div className="absolute top-24 flex w-full items-center justify-center gap-4">
      {...mapChallanges.map((challange) => (
        <Link to={challange.path} key={challange.path}>
          <button className="text-bold rounded-xl bg-black p-4 text-xl text-white">
            {challange.label}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Home;