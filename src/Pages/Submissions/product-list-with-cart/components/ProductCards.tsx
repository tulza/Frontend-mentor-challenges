import { ButtonHTMLAttributes, memo } from "react";
import { cn } from "../../../../common/lib/utils";
import { ItemData, useCart } from "../PRODUCTLISTCOMPONENT";
import data from "../data/data.json";
import useIsScreenSize from "../hook/useIsScreenSize";
import { getPath } from "../lib/utils";

const ProductCards = () => {
  return (
    <div className="flex flex-col w-max gap-7">
      <h1 className="font-bold text-[40px] text-erm">Desserts</h1>
      <div className="flex gap-8">
        <div className="grid sm:grid-cols-3 gap-6 w-max">
          <CartCardItems data={data} />
        </div>
      </div>
    </div>
  );
};

const CartCardItems = ({ data }: { data: ItemData[] }) => {
  const { CartItem } = useCart();
  const { isDesktop } = useIsScreenSize();
  // ! move this to a new component to reuse

  return (
    <>
      {data.map((item, index) => (
        // ! REPLACE WITH MEMO SOON
        <ItemCardMemo
          key={index}
          metadata={item}
          id={index}
          isDesktop={isDesktop}
          quantities={CartItem[index]?.quantity}
        />
      ))}
    </>
  );
};

const ItemCard = ({
  id,
  metadata,
  quantities = 0,
  isDesktop,
}: {
  id: number;
  isDesktop?: boolean;
  quantities?: number;
  metadata: ItemData;
}) => {
  const { desktop, mobile } = metadata.image;
  const { handleIncrementItem: AddItem, handleDecrementItem: RemoveItem } = useCart();
  const imagefile = isDesktop ? desktop : mobile;
  const imagepath = getPath(imagefile);
  return (
    <div className="rounded-lg relative ">
      <div
        className={cn(
          "relative mb-8 ",
          quantities != 0 &&
            "after:size-full after:top-0 after:rounded-lg after:absolute after:border after:border-[var(--Red)] after:pointer-events-none"
        )}
      >
        <img
          src={imagepath}
          className={cn("sm:h-60 h-[212px] rounded-lg relative sm:aspect-square aspect-[3/2]")}
          draggable="false"
        />
        {quantities === 0 ? (
          <AddToCartButton onClick={() => AddItem(metadata, id)} />
        ) : (
          <QuantitySelectButton
            quantity={quantities}
            addItem={() => AddItem(metadata, id)}
            removeItem={() => RemoveItem(id)}
          />
        )}
      </div>
      <div className="flex flex-col py-2">
        <p className="font-light text-sm text-[var(--Rose500)]">{metadata.category}</p>
        <p className="font-medium text-[var(--Rose900)]">{metadata.name}</p>
        <p className="font-medium text-[var(--Red)]">${metadata.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
const ItemCardMemo = memo(ItemCard, (prev, next) => {
  return prev.quantities === next.quantities && prev.isDesktop === next.isDesktop;
});

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AddToCartButton = ({ ...props }: buttonProps) => {
  return (
    <button
      {...props}
      className="bottom-0 z-10 w-40 border-[var(--Rose400)] hover:border-[var(--Red)] hover:text-[var(--Red)] select-none cursor-pointer h-11 rounded-full gap-2 bg-white absolute left-[50%] [translate:-50%_50%] border flex items-center justify-center"
    >
      <img src="product-list-with-cart/assets/images/icon-add-to-cart.svg" className="pointer-events-none" />
      <p className="text-sm font-semibold">Add to Cart</p>
    </button>
  );
};

const QuantitySelectButton = ({
  quantity = 1,
  addItem,
  removeItem,
}: {
  quantity?: number;
  addItem: () => void;
  removeItem: () => void;
}) => {
  return (
    <div className="bottom-0 w-40 select-none z-10 px-3 text-white h-11 rounded-full gap-2 bg-[var(--Red)] absolute left-[50%] [translate:-50%_50%] flex items-center justify-between">
      <button
        onClick={removeItem}
        className="size-4 group border border-white rounded-full hover:bg-white grid place-items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 2">
          <path fill="#fff" className="group-hover:fill-[var(--Red)]" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      {quantity}
      <button
        onClick={addItem}
        className="size-4 group border border-white rounded-full hover:bg-white grid place-items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
          <path
            fill="#fff"
            className="group-hover:fill-[var(--Red)]"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCards;
