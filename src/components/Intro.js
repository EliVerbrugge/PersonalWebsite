import React from "react"
import Typist from 'react-typist';
import Links from "../components/Links"

const Intro = () => (
  <div>
      <Typist cursor={{show: false}}>
      <h1 style={{display: "inline"}}>Hello!</h1>
      </Typist>
      <br />
      <br />
      <h3>
        I'm Eli Verbrugge, a Computer Science graduate interested in building cool tech whether it be
        robots, awesome websites or providing cool insights into the technology of the future.
      </h3>
      <br />
      <br />
      <Links />
  </div>
);

export default Intro;