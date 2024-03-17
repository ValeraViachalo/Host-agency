import React, { useEffect, useRef } from "react";

import './RunningText.scss';
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const RunningText = ({ children, color, section = document.documentElement }) => {
  const runningText = useRef([]);
  const slider = useRef();

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(slider.current, {
      xPercent: -5,
      scrollTrigger: {
        trigger: section,
        scrub: true,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (e) => (direction = e.direction * -1),
        markers: 1
      },
    });
    requestAnimationFrame(animate);
    
  }, [runningText]);
  
  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    runningText.current.forEach((currT) => {
      if(currT) {
        gsap.set(currT, { xPercent, duration: 5 });
      }
    })

    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className={classNames("running-text", {
      ['running-text--blue']: color === "blue",
      ['running-text--black']: color === "black",
    })}>
      <div className="slider" ref={slider}>
        {Array.from({length: 10}, (_, i) => (
          <div key={i} className="running-text__item" ref={(el) => runningText.current.push(el)}>
            <span>
              {children}
            </span>
            <span> — </span>
          </div>
        ))}
      </div>
    </div>
  );
};
