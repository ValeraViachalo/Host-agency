import React from "react";
import './Problems.scss';

export default function Problems() {
  return (
    <section className="problems container">
      <div className="problems__content">
        <h1>
          Потік лідів без продажу...
          <br />
          <span className="hightlighed">Знайомо?</span>
        </h1>

        <h4 className="medium">
        Злитий бюджет, без результату?
        Якщо ваш бізнес пройшов через це, але ви ще розраховуєте на якісний маркетинг — ви за адресою
        </h4>
      </div>
      <div className="problems__image">
        <img src="/images/problems.png" alt="problems" />
      </div>
    </section>
  );
}
