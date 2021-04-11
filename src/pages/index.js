import React from "react"
import Header from "../components/Header";
import Intro from "../components/Intro";
import "../styles/main.css"
import backgroundImage from "../assets/water.jpg"

function Home() {
  return (
    <div style={{height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url(" + backgroundImage + ")"}}>
        <Header />
        <Intro />
    </div>
  );
}

export default Home;