import React from "react"
import { Card } from "react-bootstrap";
import Rover from "../images/rover_swoosh.ico"
import Laptop from "../images/rover_laptop.jpg"
import AR from "../images/ar_tag.png"

const Projects = () => (
    <div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <h1 style={{paddingBottom: 25}}>Projects</h1>
            <Card border="primary" style={{}}>
                <Card.Header>Software Architect/Autonomy Lead</Card.Header>
                <Card.Body>
                <Card.Title>Mars Rover Design Team <img src={Rover} alt="Avatar" class="avatar" /></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <br/>
                    Filled in multiple roles for my university's Mars Rover Design Team over the course of a couple years. 
                    I was a software architect for one year, when I introduced robust TCP-backed error reporting to our network stack and architected our new brushless motor control framework for our robotic arm. 
                    My last year I was the development lead for the Rover autonomy stack which was powered by a asynchronous state machine written in Python. <br/>
                    <br/>• Led computer vision development using image classifiers as well as obstacle avoidance with depth map segmentation and clustering.
                    <br/>• Developed new team simulation and unit testing tools with continuous integration, and robust logging systems to track regressions.
                    <br/>• I rewrote the C++ embedded software stack for our robotic arm which involved involved developing our motion planning software and studying our inverse kinematics models.
                    <br/>• Worked on improving software quality through code standards and reviews. 
                </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={Laptop} style={{paddingLeft: "2vh", paddingRight: "2vh"}}/>
                <Card.Img variant="bottom" src={AR} style={{paddingLeft: "2vh", paddingRight: "2vh"}}/>
                <Card.Footer>
                    <small className="text-muted">August 2017 - May 2021</small>
                </Card.Footer>
            </Card>
        </div>
    </div>
);

export default Projects;