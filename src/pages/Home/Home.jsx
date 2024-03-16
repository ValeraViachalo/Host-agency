import React from "react";
import Hero from "./Hero/Hero";
import Problems from "./Problems/Problems";
import Reason from "./Reason/Reason";

import './Home.scss';
import HowWeWork from "./HowWeWork/HowWeWork";
import Services from "./Services/Services";

export default function Home() {

  return (
  <main className="home">
    <Hero />
    <div className="home__content">
      <Problems />
      <Reason />
      <HowWeWork />
      <Services />
    </div>
  </main>
  );
}
