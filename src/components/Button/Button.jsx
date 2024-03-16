import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

export const Button = ({ href, children }) => {
  return (
    <Link to={href} className="button">
      <div className="text__wrapper">
        <span className="text">{...children}</span>
        <span className="text">{...children}</span>
      </div>
      <div className="arrow__wrapper">
        <Arrow />
        <Arrow />
      </div>
    </Link>
  );
};

const Arrow = () => (
  <svg
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="arrow"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5266 2.43427L9.56285 2.41964L9.5579 2.41466L2.99036 2.28169L2.96246 0.904236L9.53002 1.03719L11.8742 1.08464L11.9021 2.46214L12.0561 10.0724L10.6853 10.0398L10.5513 3.41618L10.5266 2.43427ZM8.96306 3.50167L9.34686 5.49002L2.05439 12.847L0.876674 11.6596L8.96306 3.50167Z"
      fill="#EDEDED"
    />
  </svg>
);
