import { ButtonHTMLAttributes, memo } from "react";
import { ItemData, useCart } from "../PRODUCTLISTCOMPONENT";
import data from "../data/data.json";
import useScreen from "../hook/useScreen";

const ProductCards = () => {
  return (
    <div className="flex flex-col w-max gap-7">
      <h1 className="font-bold text-[40px] text-erm">Desserts</h1>
      <div className="flex gap-8">
        <div className="grid grid-cols-3 gap-6 w-max">
          <CartCardItems data={data} />
        </div>
      </div>
    </div>
  );
};

const CartCardItems = ({ data }: { data: ItemData[] }) => {
  const { CartItem } = useCart();
  // ! move this to a new component to reuse
  const { screen } = useScreen();
  const isDesktop = screen.width >= 1440;
  return (
    <>
      {data.map((item, index) => (
        // ! REPLACE WITH MEMO SOON
        <ItemCard key={index} metadata={item} isDesktop={isDesktop} id={index} quantities={CartItem[index]?.quantity} />
      ))}
    </>
  );
};

const ItemCard = ({
  id,
  metadata,
  isDesktop,
  quantities = 0,
}: {
  id: number;
  isDesktop?: boolean;
  quantities?: number;
  metadata: ItemData;
}) => {
  const filepath = "product-list-with-cart";
  const { desktop, mobile } = metadata.image;
  const { handleIncrementItem: AddItem, handleDecrementItem: RemoveItem } = useCart();
  const imagefile = isDesktop ? desktop : mobile;
  const imagepath = imagefile.replace(".", filepath);
  return (
    <div>
      <div className="relative mb-8">
        <img src={imagepath} className="w-[250px] rounded-lg h-60" />
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
  console.log(next);
  return prev.quantities === next.quantities;
});

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const AddToCartButton = ({ ...props }: buttonProps) => {
  return (
    <button
      {...props}
      className="bottom-0 w-40 border-[var(--Rose400)] hover:border-[var(--Red)] hover:text-[var(--Red)] select-none cursor-pointer h-11 rounded-full gap-2 bg-white absolute left-[50%] [translate:-50%_50%] border flex items-center justify-center"
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
    <div className="bottom-0 w-40 select-none cursor-pointer text-white h-11 rounded-full gap-2 bg-[var(--Red)] absolute left-[50%] [translate:-50%_50%] flex items-center justify-center">
      <button onClick={addItem}></button>
      {quantity}
      <button onClick={removeItem}></button>
    </div>
  );
};

export default ProductCards;
