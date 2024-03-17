import { Button } from "@/components/Button/Button";
import React, { useRef } from "react";

import "./CTA.scss";
import { RunningText } from "@/components/RunningText/RunningText";
import { VelocityText } from "@/components/VelocityText/VelocityText";

export default function СTA() {
  const ctaSection = useRef();

  return (
    <section className="cta" ref={ctaSection}>
      <div className="top container">
        <div className="cta__title">
          <h1>
            І найцікавіше... 
          <Star />
          <Star />
          <Star />
          </h1>
          <h3>Ми презентуємо детальний аналіз за чашкою кави у Zoom.</h3>
        </div>
        <div className="cta__button">
          <Button href="/contact">Отримати аудит</Button>
        </div>
      </div>

      <div className="cta__running-texts">
        <VelocityText baseVelocity={-7} color="blue">
          Подарунок
        </VelocityText>
        <VelocityText baseVelocity={10} color="black">
          Подарунок
        </VelocityText>
      </div>
    </section>
  );
}

const Star = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="soft-star"
  >
    <path
      d="M22.072 0.935678C22.2841 0.404778 23.0798 0.617983 22.998 1.18378L22.3112 5.93019C21.4244 12.0591 24.8528 17.9972 30.6039 20.2936L35.0578 22.0721C35.5887 22.2841 35.3755 23.0798 34.8097 22.998L30.0633 22.3112C23.9344 21.4244 17.9963 24.8528 15.6999 30.6039L13.9214 35.0578C13.7094 35.5888 12.9137 35.3756 12.9955 34.8097L13.6823 30.0633C14.5691 23.9345 11.1407 17.9964 5.38952 15.6999L0.935617 13.9215C0.404717 13.7094 0.617922 12.9137 1.18372 12.9955L5.93013 13.6823C12.059 14.5691 17.9972 11.1408 20.2936 5.38958L22.072 0.935678Z"
      fill="#3300FF"
    />
  </svg>
);
