import React, { useContext, useState } from "react";
import servicesList from "@/data/services.json";

import "./Services.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";
import { servicesAnim } from "@/helpers/anim";
import { ScrollContext } from "@/helpers/scrollContext";

export default function Services() {
  const [currentNum, setCurrentNum] = useState(1);

  return (
    <section className="services container">
      <h1 className="hightlighed">Послуги</h1>
      <h4 className="medium services__subtitle">
        Ми підбираємо релевантні інструменти та послуги для реалізації вашої
        мети.
      </h4>

      <div className="services__content">
        <h1 className="big-text services__number">
          <span>0</span>
          <motion.span
            className="services__number-slider"
            variants={servicesAnim(currentNum).numbers}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </motion.span>
        </h1>

        <ul className="services__list">
          <AnimatePresence>
            {servicesList.map((currS, i) => (
              <ServicesItem
                key={`servicesList-${i}`}
                title={currS.title}
                description={currS.description}
                id={i + 1}
                currentNum={currentNum}
                setCurrentNum={setCurrentNum}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

const ServicesItem = ({
  title,
  description,
  id,
  setCurrentNum,
  currentNum,
}) => {
  gsap.registerPlugin(ScrollTrigger);

  const handleEnterService = () => {
    setCurrentNum(id);
  };

  const handleLeaveBackService = () => {
    let currId = id !== 1 ? id - 1 : 1;

    setCurrentNum(currId);
  };

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `#service-${id}`,
      start: "top center",
      end: "bottom center",
      onEnter: () => handleEnterService(),
      onLeaveBack: () => handleLeaveBackService(),
    });
  });

  return (
    <motion.ul
      variants={servicesAnim().text}
      initial="initial"
      animate={currentNum === id ? "animate" : "exit"}
      id={`service-${id}`}
      className="services__list-item"
    >
      <h1>{title}</h1>
      <h4 className="medium">{description}</h4>
    </motion.ul>
  );
};
