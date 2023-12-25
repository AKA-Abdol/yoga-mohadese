import { useEffect, useState } from "react";

// Custom hook to detect scroll direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};

export default useScrollDirection;
