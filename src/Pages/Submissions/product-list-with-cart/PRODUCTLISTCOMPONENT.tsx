import { cn } from "../../../common/lib/utils";
import data from "./data/data.json";
import styles from "./index.module.css";

type CartItem = {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
};

const PRODUCTLISTCOMPONENT = () => {
  return (
    <div className={cn("w-dvw h-dvh flex items-center flex-col", styles.redhat)}>
      <div className="border flex flex-col gap-7 mt-20 w-[1440px] px-28">
        <h1 className="font-bold text-[40px] text-erm">Desserts</h1>
        <div className="grid grid-cols-3 gap-6 w-max">
          {data.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ItemCard = ({ name, category, price }: CartItem) => {
  return (
    <div>
      <div className="w-[250px] h-60 bg-black relative rounded-lg mb-8">
        <div className="bottom-0 w-40 h-11 rounded-full bg-white absolute left-[50%] [translate:-50%_50%] border"></div>
      </div>
      <div className="flex flex-col py-2">
        <p className="font-light text-sm">{category}</p>
        <p className="font-medium">{name}</p>
        <p className="font-medium">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PRODUCTLISTCOMPONENT;
