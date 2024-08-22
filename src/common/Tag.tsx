import { cn } from "../lib/utils";
import { IntRange } from "../lib/utilsType";

const DifficultyTag = ({ level = 1 }: { level: IntRange<1, 6> }) => {
  const difficultyLabel = ["Newbie", "Junior", "Intermediate", "Advanced", "Guru"];

  return (
    <div className="flex overflow-hidden rounded-full border font-[Inter] text-[10px] font-semibold text-black">
      <div className={cn("grid w-4 place-content-center text-white", difficultyLabel[level - 1])}>
        {level}
      </div>
      <p className="px-1 pr-2 uppercase">{difficultyLabel[level - 1]}</p>
    </div>
  );
};

export default DifficultyTag;
