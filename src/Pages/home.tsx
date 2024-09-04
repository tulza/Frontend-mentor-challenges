import useMouse from "@react-hook/mouse-position";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../common/lib/utils";
import styles from "./home.module.css";
import { Challange, Challanges } from "../data/challanges";
const HomePage = () => {
  // per page html background setter
  useLayoutEffect(() => {
    document.body.className = styles.html;
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      <motion.div className="w-dvw h-dvh grid place-items-center font-mono">
        <GridMouseGlow />
        <div className="flex flex-col items-center gap-8">
          <p className="font-bold text-xl">Tulza's Frontend mentor submissions</p>
          <div className="*:px-12 border border-slate-300/30 bg-gray-300/5 backdrop-blur-sm w-[500px] rounded-lg py-4 ">
            {Challanges.map((challange, index) => (
              <ChallangeItem key={index} challange={challange} index={index} />
            ))}
            {Array(10 - Challanges.length)
              .fill("")
              .map((_, index) => (
                <div key={index}>-</div>
              ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
const ChallangeItem = ({ challange, index }: { challange: Challange; index: number }) => {
  const [ishovering, setHover] = useState(false);
  return (
    <Link
      to={challange.path}
      className="relative select-none cursor-pointer grid grid-cols-[200px_40px_1fr]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {ishovering && <HoverSelector />}
      <p>
        <span className="font-bold">{index}.</span> {challange.label}
      </p>
      -<p>{challange.difficulty}</p>
    </Link>
  );
};

const GridMouseGlow = () => {
  const ref = useRef(document.body);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 500,
    fps: 15,
  });
  return (
    <div className={cn("absolute w-dvw h-dvh -z-10 overflow-hidden", styles.grid64)}>
      <AnimatePresence mode="wait">
        {mouse.x != null && (
          <motion.div
            className="absolute size-96 translate-x-[50%] translate-y-[50%] rounded-full bg-[radial-gradient(#fff5,#fff0_65%)]"
            initial={{ opacity: 0 }}
            // @ts-expect-error # yep it's a no null
            animate={{ opacity: 1, x: mouse.x - 160, y: mouse.y - 160 }}
            transition={{ duration: 0.1, opacity: { duration: 0.5 }, scale: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const HoverSelector = () => (
  <motion.div layoutId="selector" className="bg-white/5 z-10 size-full absolute" transition={{ duration: 0.2 }} />
);
export default HomePage;
