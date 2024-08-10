import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type CardProps = {
  className?: string;
};

const Card = ({ ...props }: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={cn(
        "text-bold relative rounded-lg border border-black bg-[hsl(var(--home-background))] p-3 text-xl text-black",
        "before:absolute before:inset-0 before:top-2 before:-z-10 before:h-full before:w-full before:rounded-lg before:border-black before:bg-[hsl(var(--home-highlight))] before:outline before:outline-1",
        props.className
      )}
    >
      {props.children}&nbsp;
    </div>
  );
};

export default Card;
