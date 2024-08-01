import { QRcode } from "./assets/img";
import "./index.css";
const QRCODECOMPONENT = () => {
// you should never tailwind like this but for the sake of perfection against frontend mentor it is therefore acceptable.
  return (
    <div className="bg-[#D5E1EF] w-dvw h-dvh grid place-content-center outfit">
      <div className="p-4 bg-white text-center rounded-2xl w-min flex flex-col items-center">
        <img className="min-w-72 aspect-square rounded-xl" src={QRcode} />
        <p className="mt-[22px] text-center text-[22px] text-slate-800 font-bold leading-7">
          Improve your front-end skills by building projects
        </p>
        <p className="mx-3 mt-4 mb-5 text-[15px] text-slate-500 leading-[22px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCODECOMPONENT;
