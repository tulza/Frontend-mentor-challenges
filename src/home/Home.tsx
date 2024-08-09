import { Link } from "react-router-dom";
import { mapChallanges } from "../App";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import { useScreen } from "../hooks/useScreen";

const Home = () => {
  const { screen } = useScreen();
  console.log(screen);
  return (
    <motion.div className="absolute flex h-dvh w-dvw select-none items-center justify-center gap-4">
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
    </motion.div>
  );
};

export default Home;
