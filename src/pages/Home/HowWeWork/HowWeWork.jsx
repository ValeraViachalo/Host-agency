import React from "react";

import "./HowWeWork.scss";

export default function HowWeWork() {
  return (
    <section className="how-we-work container">
      <h1>
        Як працюємо <span className="hightlighed">МИ?</span>
      </h1>
      <h4 className="medium how-we-work__subtitle">
        Під кожен проект у нас унікальний алгоритм дій, але є пункти, без яких
        ми нікуди:
      </h4>

      <div className="how-we-work__content">
        <div className="how-we-work__image">
          <img src="/images/how-we-work.png" alt="" />
        </div>
        <ul className="how-we-work__list">
          <ul>
            <h1>Аналіз ринку</h1>
            <p>
              Детальний розбір ситуації на ринку, цільової аудиторії та
              конкерентів.
            </p>
          </ul>

          <ul>
            <h1>Занурення в бізнес</h1>
            <p>Глибокий аналіз усіх бізнес-процесів.</p>
          </ul>

          <ul>
            <h1>Тест гіпотез</h1>
            <p>
              Перевірка гіпотез, яка забирає мало бюджету та швидко приносить
              результат.
            </p>
          </ul>

          <ul>
            <h1>Масштабування</h1>
            <p>
              Відкриття нових каналів трафіку та збільшення показників на всіх
              етапах вирви.
            </p>
          </ul>
        </ul>
      </div>
    </section>
  );
}
