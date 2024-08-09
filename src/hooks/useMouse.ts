import { useEffect, useState } from "react";

export const useMousePos = () => {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  } as const);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (MouseEvent: MouseEvent) => {
    setMouse({
      x: MouseEvent.clientX,
      y: MouseEvent.clientY,
    });
  };

  return { x: mouse.x, y: mouse.y };
};
