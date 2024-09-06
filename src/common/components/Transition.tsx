import { motion } from "framer-motion";
import { ReactNode } from "react";
const Transition = ({ page }: { page: ReactNode }) => {
  return (
    <>
      <div className="*:w-dvw *:h-dvh overflow-hidden *:fixed *:select-none *:z-[9999] *:pointer-events-none">
        <motion.div
          className="origin-bottom"
          initial={{ backdropFilter: "blur(0px)", background: "#0000" }}
          animate={{ backdropFilter: "blur(0px)", background: "#0000" }}
          exit={{ backdropFilter: "blur(16px)", background: "#000" }}
        />
        <motion.div
          className="origin-top"
          initial={{ backdropFilter: "blur(16px)", background: "#000" }}
          animate={{ backdropFilter: "blur(0px)", background: "#0000" }}
          exit={{ backdropFilter: "blur(0px)", background: "#0000" }}
        />
        {/* <motion.div
          className="size-full fixed origin-bottom z-[9999] bg-black border-slate-600 border-t-4"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
        />
        <motion.div
          className="size-full fixed origin-top z-[9999] bg-black border-slate-600 border-b-4"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
        /> */}
      </div>
      {page}
    </>
  );
};

export default Transition;
