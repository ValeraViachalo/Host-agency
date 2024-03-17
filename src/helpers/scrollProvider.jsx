import React, { useRef, useEffect, ReactNode } from "react";
import { ScrollContext } from "./scrollContext";

function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

export const ScrollProvider = ({ children }) => {
  const locomotiveScroll = useRef();

  const scrollTo = (e, currentLink) => {
    e.preventDefault();
    locomotiveScroll.current.scrollTo(currentLink, {
      duration: 1.7,
      easing: (x) => easeInOutExpo(x),
    });
  };

  const scrollToService = (currentLink) => {
    if (locomotiveScroll.current) {
      locomotiveScroll.current.scrollTo(currentLink, {
        duration: .7,
        offset: 500,
        easing: (x) => easeInOutExpo(x),
      });
    }
  };

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll.current = new LocomotiveScroll({
        lenisOptions: {
          duration: 0.7,
          lerp: 0.1,
          smoothWheel: true,
          wheelMultiplier: 1.5,
        },
      });
    })();
  }, []);

  return (
    <ScrollContext.Provider value={[scrollTo, scrollToService]}>{children}</ScrollContext.Provider>
  );
};