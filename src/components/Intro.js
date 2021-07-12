import React from "react"
import Typist from 'react-typist';
import Links from "../components/Links"
import Me from "../images/me.png"

const Intro = () => (
  <div style={{textAlign: "center", marginTop: "10%", marginLeft: "10%", marginRight: "10%"}}>
      <Typist cursor={{show: false}}>
      <h1>Hello there!</h1>
      </Typist>
      <br/>
      <br/>
      <h3 style={{}}>
        I'm Eli Verbrugge <img src={Me} alt="Avatar" class="avatar"/>, a Computer Science and Computer Engineering graduate interested in building cool tech whether it be
        robots, awesome applications to control them or providing cool data insights into tech.
      </h3>
      <br />
      <br />
      <Links />
  </div>
);

export default Intro;