import { Link } from "react-router-dom";
import { mapChallanges } from "../App";
import { cn } from "../lib/utils";
import { circOut, motion, motionValue, useTransform } from "framer-motion";
import { useScreen } from "../hooks/useScreen";
import { useMousePos } from "../hooks/useMouse";

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
        <div></div>
        <div className="z-10 flex w-dvw justify-center">
          {...mapChallanges.map((challange) => (
            <Link to={challange.path} key={challange.path}>
              <button
                className={cn(
                  "text-bold relative rounded-lg border border-black bg-[hsl(var(--home-background))] p-3 text-xl text-black",
                  "before:absolute before:inset-0 before:top-2 before:-z-10 before:h-full before:w-full before:rounded-lg before:border-black before:bg-[hsl(var(--home-highlight))] before:outline before:outline-1"
                )}
              >
                {challange.label}
              </button>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Home;
