import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const BigButton = ({ label, ...prop }: ButtonProps) => {
  return (
    <button
      {...prop}
      className="w-full hover:saturate-[0.8] rounded-full select-none text-white grid place-items-center bg-[var(--Red)] p-4"
    >
      {label}
    </button>
  );
};

export default BigButton;
