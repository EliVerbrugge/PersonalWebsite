import React from "react"
import Header from "../components/Header";
import Experience from "../components/Experience";
import backgroundImage from "../images/background2.jpg"


function ExperiencePage() {
  return (
    <div style={{minHeight: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url(" + backgroundImage + ")"}}>
        <Header />
        <Experience />
    </div>
  );
}

export default ExperiencePage;