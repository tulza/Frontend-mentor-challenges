import { createContext, PropsWithChildren, useContext, useState } from "react";
import { cn } from "../../../../common/lib/utils";
import styles from "../index.module.css";
import { getPath } from "../lib/utils";
import { useCart } from "../PRODUCTLISTCOMPONENT";
import BigButton from "./BigButton";

export const UseDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be use within a Dialog");
  }
  return context;
};

type DialogContextProps = {
  open: boolean;
  handleToggle: () => void;
};

const DialogContext = createContext<DialogContextProps>(null!);
export const Dialog = ({ ...props }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((p) => !p);
  };
  return <DialogContext.Provider value={{ open, handleToggle }}>{props.children}</DialogContext.Provider>;
};

export const DialogConfirmContent = () => {
  const { CartItem, handleClearCart } = useCart();
  const { open, handleToggle } = UseDialog();
  if (!open) return;
  const total = Object.values(CartItem).reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <div className="z-10 fixed grid left-0 top-0 place-items-center w-dvw h-dvh text-[var(--Rose900)]">
      <div className="w-full h-full bg-black/50" onMouseDown={handleToggle} />
      <div className="bg-white absolute flex rounded-xl flex-col  p-10 *:mb-8">
        <img src="product-list-with-cart\assets\images\icon-order-confirmed.svg" className="w-12 !mb-4" />
        <div>
          <h3 className="text-[40px] font-bold ">Order Confirmed</h3>
          <p className="text-[var(--Rose500)]">We hope you enjoy your food!</p>
        </div>
        <div className="w-[512px] bg-[var(--Rose50)] rounded-lg px-6 pr-0">
          <div className={cn("max-h-[300px] *:py-2 my-4 overflow-y-auto pr-4 mr-2", styles.scroll)}>
            {Object.values(CartItem).map((item, i) => (
              <div key={i} className="border-b h-[90px] flex  ">
                <img src={getPath(item.image)} className="mr-4 rounded-md" />
                <div className="w-full flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p>
                      <span className="mr-2 text-[var(--Red)] font-medium">{item.quantity}x</span>
                      <span className="text-[var(--Rose500)]">@ ${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-6">
            <p className="text-[14px]">Order Total</p>
            <strong className="text-2xl">${total.toFixed(2)}</strong>
          </div>
        </div>
        <BigButton
          label="Start New Order"
          onClick={() => {
            handleToggle();
            handleClearCart();
          }}
        />
      </div>
    </div>
  );
};
