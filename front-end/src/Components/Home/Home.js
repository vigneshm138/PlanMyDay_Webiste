import React from "react";
import "./Home.css";
import Place from "../Places/Place";
import Default from "../Default/Default";

const Home = () => {

  return (
    <div className="home">
      <Default />
      <Place />
    </div>
  );
};

export default Home;
