import { CartItem, useCart } from "../PRODUCTLISTCOMPONENT";

const CartItems = () => {
  const { CartItem } = useCart();
  const sumItems = Object.values(CartItem).reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div className="bg-white rounded-xl w-full h-max p-6 mt-2 ">
      <h3 className="font-bold text-2xl mb-2">Your Cart ({sumItems})</h3>
      {Object.values(CartItem).map((data, i) => (
        <CartItemList key={i} {...data} />
      ))}
    </div>
  );
};

const CartItemList = ({ ...cart }: CartItem) => {
  return (
    <div className="border-b py-4 flex justify-between items-center">
      <div>
        <p className="text-sm font-semibold mb-2">{cart.name}</p>
        <p className="text-sm font-medium">
          <span className="font-medium">{cart.quantity}x</span>
          <span className="font-medium ml-4">@ ${cart.price.toFixed(2)}</span>
          <span className="font-bold ml-2">${(cart.price * cart.quantity).toFixed(2)}</span>
        </p>
      </div>
      <RemoveItemButton id={cart.id} />
    </div>
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
