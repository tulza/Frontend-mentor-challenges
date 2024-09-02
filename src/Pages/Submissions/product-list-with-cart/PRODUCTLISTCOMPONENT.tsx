import { createContext, useContext, useLayoutEffect, useState } from "react";
import { cn } from "../../../common/lib/utils";
import CartItems from "./components/CartItems";
import ProductCards from "./components/ProductCards";
import styles from "./index.module.css";

// ***** Started on 03/09/24 *****

export type ItemData = {
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

export type ShoppingCart = {
  [key: number]: CartItem;
};

export type CartItem = { name: string; price: number; quantity: number; id: number };

export const fixtureCartItem: ShoppingCart = {
  12: {
    id: 12,
    name: "fixture",
    price: 2.75,
    quantity: 21,
  },
};

type CartContextType = {
  CartItem: ShoppingCart;
  handleIncrementItem: (data: ItemData, id: number) => void;
  handleDecrementItem: (id: number) => void;
  handleDeleteFromCart: (id: number) => void;
};

const CartContext = createContext({} as CartContextType);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const PRODUCTLISTCOMPONENT = () => {
  // per page html background setter
  useLayoutEffect(() => {
    document.body.className = styles.html;
    return () => {
      document.body.className = "";
    };
  });

  const [CartItem, setCartItem] = useState({ ...fixtureCartItem } as ShoppingCart);
  const handleIncrementItem = (data: ItemData, id: number) => {
    setCartItem((prev) => {
      if (CartItem[id]) {
        return {
          ...prev,
          [id]: {
            id: id,
            name: data.name,
            price: data.price,
            quantity: prev[id].quantity + 1,
          },
        };
      }
      return {
        ...prev,
        [id]: {
          id: id,
          name: data.name,
          price: data.price,
          quantity: 1,
        },
      };
    });
  };

  const handleDecrementItem = (id: number) => {
    if (CartItem[id]) {
      setCartItem((prev) => {
        return {
          ...prev,
          id: {
            id: id,
            name: prev[id].name,
            price: prev[id].price,
            quantity: prev[id].quantity + 1,
          },
        };
      });
    }
  };

  const handleDeleteFromCart = (id: number) => {
    const temp = CartItem;
    delete temp[id];
    setCartItem({ ...temp });
  };
  return (
    <div className={cn("w-dvw h-dvh flex items-center flex-col overflow-x-hidden", styles.redhat)}>
      <div className="flex mt-20 w-[1440px] px-28 gap-8 mb-16">
        <CartContext.Provider
          value={{
            CartItem,
            handleIncrementItem,
            handleDeleteFromCart,
            handleDecrementItem,
          }}
        >
          <ProductCards />
          <CartItems />
        </CartContext.Provider>
      </div>
    </div>
  );
};

export default PRODUCTLISTCOMPONENT;
