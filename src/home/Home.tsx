import useMouse from "@react-hook/mouse-position";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import "./index.css";

const Home = ({ children }: { children: React.ReactNode }) => {
  // const { width } = useScreen();
  const containerRef = useRef(null);
  const mouse = useMouse(containerRef, {
    enterDelay: 100,
    leaveDelay: 500,
    fps: 15,
  });
  const { x, y } = mouse;
  // const screenWidthRange = [-10, width];
  // const mx = motionValue(x);
  // const background = useTransform(
  //   mx,
  //   screenWidthRange,
  //   [
  //     "linear-gradient(90deg, rgb(200, 228, 223) 0%, rgb(4, 149, 120) 100%",
  //     "linear-gradient(0deg, rgb(4, 149, 120) 0%,rgb(200, 228, 223) 100%)",
  //   ],
  //   { ease: circOut, clamp: false }
  // );
  return (
    <>
      <motion.div
        className="absolute flex h-dvh w-dvw select-none items-center justify-center gap-4"
        ref={containerRef}
      >
        <div className="grid128 absolute flex h-dvh w-dvw overflow-hidden bg-slate-300/10">
          <AnimatePresence mode="wait">
            {mouse.x != null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: x - 160, y: y - 160 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute size-80 translate-x-[50%] translate-y-[50%] rounded-full bg-[radial-gradient(#fff,#fff0_65%)]"
                transition={{ duration: 0.1 }}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="flex w-dvw flex-col items-center justify-center">
          <div className="z-10">{children}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
