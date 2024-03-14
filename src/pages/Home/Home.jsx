import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

export default function Home() {

  return (
  <main className="home container">
    <Link to='/contact'>  
      <h1>
        Зв'язатися
      </h1>
    </Link>  
    <Link to='/contact'>  
      <h1>
        Зв'язатися
      </h1>
    </Link>  
    
  </main>
  );
}
