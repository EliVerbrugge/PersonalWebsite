import React from "react"
import "../styles/Education.css"
import STImg from "../images/s&t.png"

const Education = () => (
  <section class="resume-section" id="education">
      <div class="resume-section-content">
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                  <h3 class="mb-0">University of Missouri Science & Technology</h3>
                  <div class="subheading mb-3">Bachelor of Science</div>
                  <div>Computer Science & Computer Engineering</div>
                  <div>Software Architect & Autonomy Lead for Mars Rover Student Design Team</div>
                  <br/>
                  <p>GPA: 3.71</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2017 - May 2021</span>
                <br/>
                <br/>
                <img src={STImg} alt="S&T" className="Logo"/>
              </div>
          </div>
          <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                  <h3 class="mb-0">Kirkwood High School</h3>
                  <div class="subheading mb-3">Kirkwood, MO</div>
              </div>
              <div class="flex-shrink-0"><span class="text-primary">August 2014 - May 2017</span></div>
          </div>
      </div>
  </section>
);

export default Education;