import React from "react"
import Header from "../components/Header";
import Intro from "../components/Intro";
import "../styles/main.css"

function Home() {
  return (
    <div>
        <Header />
        <div style={{ 
          position: 'absolute', left: '50%', top: '30%',
          transform: 'translate(-50%, -30%)', textAlign: "center"
          }}>
          <Intro />
        </div>
    </div>
  );
}

export default Home;