import { AnimatePresence, motion } from "framer-motion";
import { CartItem, useCart } from "../PRODUCTLISTCOMPONENT";
import BigButton from "./BigButton";
import { Dialog, DialogConfirmContent, UseDialog } from "./Dialog";

const CartItems = () => {
  const { CartItem } = useCart();
  const sumItems = Object.values(CartItem).reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div className="bg-white rounded-xl gap-6 w-full h-max p-6 flex flex-col mt-2 ">
      <h3 className="font-bold text-2xl ">Your Cart ({sumItems})</h3>
      <Dialog>{Object.keys(CartItem).length === 0 ? <EmptyCart /> : <CartList />}</Dialog>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-4">
      <img className="size-32" src="product-list-with-cart\assets\images\illustration-empty-cart.svg" />
      <p className="text-[var(--Rose500)] font-medium">Your added items will appear here</p>
    </div>
  );
};

const CartList = () => {
  const { CartItem } = useCart();
  const { handleToggle } = UseDialog();
  const totalCost = Object.values(CartItem).reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <>
      <div>
        <AnimatePresence>
          {Object.values(CartItem).map((data) => (
            <CartItemList key={data.id} {...data} />
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">Order total</p>
        <h3 className="font-bold text-2xl">${totalCost.toFixed(2)}</h3>
      </div>
      <div className="bg w-full h-[52px] grid rounded place-content-center bg-[var(--Rose50)]">
        <p className="text-sm whitespace-pre flex items-center">
          <img className="mr-2" src="product-list-with-cart\assets\images\icon-carbon-neutral.svg" />
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>
      <DialogConfirmContent />
      <BigButton label="Confirm Order" onClick={handleToggle} />
    </>
  );
};

const CartItemList = ({ ...cart }: CartItem) => {
  return (
    <motion.div exit={{ height: 0, opacity: 0, filter: "blur(4px)" }} className="will-change-[height,filter,opacity]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold mb-1">{cart.name}</p>
          <p className="text-sm font-medium">
            <span className="font-medium text-[var(--Red)]">{cart.quantity}x</span>
            <span className="font-medium ml-4 text-[var(--Rose500)]">@ ${cart.price.toFixed(2)}</span>
            <span className="font-bold ml-2">${(cart.price * cart.quantity).toFixed(2)}</span>
          </p>
        </div>
        <RemoveItemButton id={cart.id} />
      </div>
      <hr className="my-4" />
    </motion.div>
  );
};

const RemoveItemButton = ({ id }: { id: number }) => {
  const { handleDeleteFromCart: delItem } = useCart();
  return (
    <button
      onClick={() => delItem(id)}
      className="group border-[var(--Rose300)] hover:border-[var(--Rose900)] border-2 size-min rounded-full p-0.5 grid place-items-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
        <path
          className="fill-[var(--Rose300)] group-hover:fill-[var(--Rose900)]"
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
        />
      </svg>
    </button>
  );
};

export default CartItems;
