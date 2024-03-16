import React, { useState } from "react";
import servicesList from "@/data/services.json";

import "./Services.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, AnimatePresence } from "framer-motion";
import { servicesAnim } from "@/helpers/anim";

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
          <AnimatePresence mode="popLayout" presenceAffectsLayout>
            <motion.span
              key={currentNum}
              variants={servicesAnim.numbers}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {currentNum}
            </motion.span>
          </AnimatePresence>
        </h1>

        <ul className="services__list">
          <AnimatePresence>
            {servicesList.map((currS, i) => (
              <ServicesItem
                key={`servicesList-${i}`}
                title={currS.title}
                description={currS.description}
                id={i + 1}
                setCurrentNum={setCurrentNum}
              />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </section>
  );
}

const ServicesItem = ({ title, description, id, setCurrentNum }) => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: `#service-${id}`,
      start: "top center",
      end: "top center",
      onEnter: () => setCurrentNum(id),
      onLeaveBack: () => setCurrentNum(id !== 1 ? id - 1 : 1),
    });
  });

  return (
    <ul id={`service-${id}`}>
      <h1>{title}</h1>
      <h4 className="medium">{description}</h4>
    </ul>
  );
};
