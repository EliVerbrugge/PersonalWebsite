import React from "react"
import Header from "../components/Header";
import Resume from "../components/Resume"
import { Document } from 'react-pdf'

function ResumePage() {
  return (
    <div>
      <Header />
      <Resume />
    </div>
  );
}

export default ResumePage;

