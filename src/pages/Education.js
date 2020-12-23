import React from "react"
import Header from "../components/Header";
import Education from "../components/Education";


function EducationPage() {
  return (
    <div>
        <Header />
        <Education />
        <h1>PDF Example with iframe</h1>
        <iframe src="../images/test.pdf" width="100%" height="500px">
        </iframe>
    </div>
  );
}

export default EducationPage;