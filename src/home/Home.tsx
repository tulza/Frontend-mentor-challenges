import { Link } from "react-router-dom";
import { mapChallanges } from "../App";
import { cn } from "../lib/utils";
import { circOut, motion, motionValue, useTransform } from "framer-motion";
import { useScreen } from "../hooks/useScreen";
import { useMousePos } from "../hooks/useMouse";
import Card from "../common/Card";

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
          <div className="mb-4 rounded-lg border border-black bg-white">asd</div>
          <div className="z-10">
            {...mapChallanges.map((challange) => (
              <Link to={challange.path} key={challange.path}>
                <Card className="">{challange.label}</Card>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
