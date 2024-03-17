import React from "react";

import './Home.scss';

import Hero from "./Hero/Hero";
import Problems from "./Problems/Problems";
import Reason from "./Reason/Reason";
import HowWeWork from "./HowWeWork/HowWeWork";
import Services from "./Services/Services";
import CTA from "./СTA/СTA";

export default function Home() {

  return (
  <main className="home">
    <Hero />
    <div className="home__content">
      <Problems />
      <Reason />
      <HowWeWork />
      <Services />
      <CTA />
    </div>
  </main>
  );
}
