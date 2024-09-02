import { useLayoutEffect } from "react";
import { cn } from "../../../common/lib/utils";
import data from "./data/data.json";
import styles from "./index.module.css";

export type CartItem = {
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
  // per page html background setter
  useLayoutEffect(() => {
    document.body.className = styles.html;
    return () => {
      document.body.className = "";
    };
  });
  return (
    <div className={cn("w-dvw h-dvh flex items-center flex-col", styles.redhat)}>
      <div className="flex mt-20 w-[1440px] px-28 gap-8">
        <div className="flex flex-col w-max gap-7">
          <h1 className="font-bold text-[40px] text-erm">Desserts</h1>
          <div className="flex gap-8">
            <div className="grid grid-cols-3 gap-6 w-max">
              {data.map((item, index) => (
                <ItemCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white w-full h-max p-6 mt-2">
          <h3 className="font-bold text-2xl mb-2">Your Cart (7)</h3>
          <div className="border-b py-4 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium mb-2">Classic Tiramisu</p>
              <p className="text-sm font-medium">
                <span className="font-medium">1x</span>
                <span className="font-medium ml-4">@ $5.50</span>
                <span className="font-bold ml-2">$5.50</span>
              </p>
            </div>
            <RemoveItemButton />
          </div>
        </div>
      </div>
    </div>
  );
};

const RemoveItemButton = () => {
  return (
    <button className="*:fill-[var(--Rose300)] border-[var(--Rose300)] border-2 size-min rounded-full p-0.5">
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
      </svg>
    </button>
  );
};

const ItemCard = ({ name, category, price }: CartItem) => {
  return (
    <div>
      <div className="w-[250px] h-60 bg-black relative rounded-lg mb-8">
        <div className="bottom-0 w-40 select-none cursor-pointer h-11 rounded-full gap-2 bg-white absolute left-[50%] [translate:-50%_50%] border flex items-center justify-center">
          <img src="product-list-with-cart/assets/images/icon-add-to-cart.svg" />
          <p className="text-sm font-medium">Add to Cart</p>
        </div>
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
