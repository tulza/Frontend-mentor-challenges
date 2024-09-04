import { useCart } from "../PRODUCTLISTCOMPONENT";

const Dialog = ({ open }: { open: boolean }) => {
  const { CartItem } = useCart();
  if (!open) return;

  return (
    <div className="z-10 fixed grid left-0 top-0 place-items-center w-dvw h-dvh">
      <div className="w-full h-full bg-black/10" />
      <div className="bg-white absolute flex flex-col  p-10">
        <img src="product-list-with-cart\assets\images\icon-order-confirmed.svg" className="w-10" />
        <div>
          <h3 className="text-4xl font-bold">Order Confirmed</h3>
          <p className="text-xs mb-8">We hope you enjoy your food!</p>
        </div>
        <div className="w-[512px] bg-[var(--Rose50)] px-6">
          {Object.values(CartItem).map((item) => (
            <div className="py-6 border-b h-[90px] flex">
              <img />
              <div className="w-full flex justify-between items-center">
                <div>
                  <medium>{item.name}</medium>
                  <p>
                    <span className="mr-2">{item.quantity}</span>
                    <span>@ ${item.price}</span>
                  </p>
                </div>
                <p>${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p>Order Total</p>
        </div>
        <button className="bg-[var(--Red)] text-white">Start New Order</button>
      </div>
    </div>
  );
};

export default Dialog;
