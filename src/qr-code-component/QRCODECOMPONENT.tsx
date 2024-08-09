import { QRcode } from "./assets/img";
import "./index.css";
const QRCODECOMPONENT = () => {
  // you should never tailwind like this but for the sake of perfection against frontend mentor it is therefore acceptable.
  return (
    <div className="outfit grid h-dvh w-dvw place-content-center bg-[#D5E1EF]">
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
