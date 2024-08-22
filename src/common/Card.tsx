import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type CardProps = {
  className?: string;
};

const Card = ({ ...props }: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={cn(
        "text-bold bg-homebg relative rounded-lg border p-3 text-xl text-white/70",
        "before:bg-homehl before:absolute before:inset-0 before:top-2 before:-z-10 before:h-full before:w-full before:rounded-lg",
        props.className
      )}
    >
      {props.children}&nbsp;
    </div>
  );
};

export default Card;
