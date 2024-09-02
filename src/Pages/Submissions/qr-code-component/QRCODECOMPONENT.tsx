import { useLayoutEffect } from "react";
import { cn } from "../../../common/lib/utils";
import { QRcode } from "./assets/img";
import styles from "./index.module.css";
const QRCODECOMPONENT = () => {
  // per page html background setter
  useLayoutEffect(() => {
    document.body.className = styles.html;
    return () => {
      document.body.className = "";
    };
  });

  // you should never tailwind like this but for the sake of perfection against frontend mentor it is therefore acceptable.
  return (
    <div className={cn("grid h-dvh w-dvw place-content-center", styles.outfit)}>
      <div className="flex w-min flex-col items-center rounded-2xl bg-white p-4 text-center shadow-lg">
        <img className="aspect-square min-w-72 rounded-xl" src={QRcode} />
        <p className="mt-[22px] text-center text-[22px] font-bold leading-7 text-slate-800">
          Improve your front-end skills by building projects
        </p>
        <p className="mx-3 mb-5 mt-4 text-[15px] leading-[22px] text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCODECOMPONENT;
