import React from "react";
import { Link } from "react-router-dom";

import "./ErrorPage.scss";

export default function ErrorPage() {

  return (
    <>
      <div className="error-page__content">
        <h1 className="big-text">404</h1>
        <h1>
          You`re lost bro{" "}
          <Link to="/" className="error-page__link">
            Go home
          </Link>
        </h1>
      </div>
    </>
  );
}
