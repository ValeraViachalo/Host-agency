import React from "react";
import linksList from "@/data/links.json";

import "./Header.scss";
import { Nav } from "../Nav/Nav";
import AnchorLink from "../AnchorLink/AnchorLink";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <ul className="header__list-links">
          {linksList.map((currLink, index) => (
            <li key={`header_link_${index}`}>
              <AnchorLink className="header__link" toSection={currLink.link}>
                <span>{currLink.name}</span>
              </AnchorLink>
            </li>
          ))}
        </ul>

        <div className="header__button">
          <Button 
            href="/contact"
          >
            Зв'язатися
          </Button>
        </div>
      </div>

      {/* <div className="header__nav">
        <Nav />
      </div> */}
    </header>
  );
};
