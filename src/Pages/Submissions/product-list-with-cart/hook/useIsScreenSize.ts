import { useEffect, useState } from "react";
import useScreen from "./useScreen";

const useIsScreenSize = () => {
  const [screen, setScreen] = useState({ isDesktop: true, isMobile: false });
  const def = { isDesktop: false, isMobile: false };
  const { screen: size } = useScreen();

  const onResize = () => {
    if (size.width >= 640) {
      if (screen.isDesktop) return; // No need to update state if it's already correct
      setScreen({ ...def, isDesktop: true });
    } else {
      if (screen.isMobile) return; // No need to update state if it's already correct
      setScreen({ ...def, isMobile: true });
    }
  };

  useEffect(() => {
    onResize();
  }, [size]);

  return screen;
};

export default useIsScreenSize;
