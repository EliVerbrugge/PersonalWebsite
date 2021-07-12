import React from "react"
import Header from "../components/Header";
import Projects from "../components/Projects";
import backgroundImage from "../images/background3.jpg"


function ProjectsPage() {
  return (
    <div style={{minHeight: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: "url(" + backgroundImage + ")"}}>
        <Header />
        <Projects />
    </div>
  );
}

export default ProjectsPage;