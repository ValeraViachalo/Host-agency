import React from "react";

import './Reason.scss'

export default function Reason() {
  return (
    <section className="reason container">
      <h1>90% маркетологів не візьмуть на себе відповідальність:</h1>
      <div className="reason__content">
        <h4 className="medium">
          Стандартне співпраця:
          <br />
          «на нас ліди, на вас продажі»
          <br />
          <br />
            Ми занурюємося глибше і допомагаємо клієнтам організувати ефективний
            цикл: від аудиторії і заявок
          <br />
          <br />
          <span className="hightlighed">
            Середній LTV наших клієнтів 6 місяців
          </span>
        </h4>
        <img src="/images/reason.png" alt="reason meme" className="reason__image"/>
      </div>
    </section>
  );
}
