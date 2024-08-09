import { useEffect, useState } from "react";

export const useScreen = () => {
  const [screen, setScreen] = useState({ width: innerWidth, height: innerHeight } as const);
  const onResize = () => {
    setScreen({ width: innerWidth, height: innerHeight } as const);
  };
  useEffect(() => {
    onResize();
    addEventListener("resize", () => {
      onResize();
    });
    return removeEventListener("resize", () => {
      onResize();
    });
  }, []);

  return { screen };
};
