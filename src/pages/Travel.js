import React from "react"
import Header from "../components/Header";
import Travel from "../components/Travel";
import backgroundImage from "../images/background4.jpg"


function TravelPage() {
  return (
    <div style={{minHeight: "100vh", backgroundImage: "url(" + backgroundImage + ")"}}>
        <Header />
        <Travel />
    </div>
  );
}

export default TravelPage;