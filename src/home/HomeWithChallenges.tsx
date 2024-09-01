import { CameraOff } from "lucide-react";
import { Link } from "react-router-dom";
import { mapChallanges } from "../App";
import LinkButton from "../common/LinkButton";
import DifficultyTag from "../common/Tag";
import Home from "./Home";

const HomeWithChallenges = () => {
  return (
    <Home>
      {...mapChallanges.map((challange) => (
        <Link to={challange.path} key={challange.path}>
          <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white p-4">
            <div className="grid size-32 place-items-center bg-grayish">
              <CameraOff size={48} color="#888" />
            </div>
            {/* tags */}
            <DifficultyTag level={1} />
            <LinkButton label={challange.label} />
          </div>
        </Link>
      ))}
    </Home>
  );
};

export default HomeWithChallenges;
