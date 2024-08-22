import { Link } from "react-router-dom";
import { mapChallanges } from "../App";
import { circOut, motion, motionValue, useTransform } from "framer-motion";
import { useScreen } from "../hooks/useScreen";
import { useMousePos } from "../hooks/useMouse";
import { CameraOff } from "lucide-react";
import DifficultyTag from "../common/Tag";
import LinkButton from "../common/LinkButton";

const Home = () => {
  const { width } = useScreen();
  const { x } = useMousePos();
  const screenWidthRange = [-10, width];
  const mx = motionValue(x);
  const background = useTransform(
    mx,
    screenWidthRange,
    [
      "linear-gradient(90deg, rgb(200, 228, 223) 0%, rgb(4, 149, 120) 100%",
      "linear-gradient(0deg, rgb(4, 149, 120) 0%,rgb(200, 228, 223) 100%)",
    ],
    { ease: circOut, clamp: false }
  );
  return (
    <>
      <motion.div
        className="absolute flex h-dvh w-dvw select-none items-center justify-center gap-4"
        style={{ background }}
      >
        <div className="flex w-dvw flex-col items-center justify-center">
          <div className="z-10">
            {...mapChallanges.map((challange) => (
              <Link to={challange.path} key={challange.path}>
                <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white p-4">
                  <div className="bg-grayish grid size-32 place-items-center">
                    <CameraOff size={48} color="#888" />
                  </div>
                  {/* tags */}
                  <DifficultyTag level={1} />
                  <LinkButton label={challange.label} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
