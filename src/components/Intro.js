import React from "react"
import Typist from 'react-typist';
import Links from "../components/Links"
import FiestaImg from "../images/me.png"

const Intro = () => (
  <div style={{textAlign: "center", marginTop: "100px", marginLeft: "100px", marginRight: "100px" }}>
      <Typist cursor={{show: false}}>
      <h1>Hello there!</h1>
      </Typist>
      <br/>
      <br/>
      <h3>
        I'm Eli Verbrugge <img src={FiestaImg} alt="Avatar" class="avatar" />, a Computer Science graduate interested in building cool tech whether it be
        robots, awesome websites or providing cool insights into the technology of the future.
      </h3>
      <br />
      <br />
      <Links />
  </div>
);

export default Intro;