import React from "react"
import { Card, Jumbotron, Container } from "react-bootstrap";
import Garmin from "../images/garmin.jpg"
import Microsoft from "../images/microsoft.png"

const Experience = () => (
    <div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50}}>
            <h1 style={{paddingBottom: 25}}>Internships</h1>
            <Card border="primary" style={{}}>
                <Card.Header>Software Engineer Intern</Card.Header>
                <Card.Body>
                <Card.Title>Microsoft <img src={Microsoft} alt="Avatar" class="avatar" /></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <br/>
                Intern for the Windows Virtual Desktop Data and Intelligence Team. <br/>
                    <br/>• Created data insights for the Windows Virtual Desktop service running in Azure and learned about sampling procedures to provide meaningful insight into client populations
                    <br/>• Built a data pipeline using SQL and Azure Data Factory to power a new Power BI report used to analyze regressions in different client applications and help make ship readiness decisions
                    <br/>• Developed an automated diagnostics collection utility with C# and Microsoft Power Automate to assist in triaging bugs and cutting down 2-3 minutes of data collection work across dozens of bugs
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">June 2020 - August 2020</small>
                </Card.Footer>
            </Card>
                <br/>
            <Card border="secondary">
                <Card.Header>Software Engineer Intern</Card.Header>
                <Card.Body>
                <Card.Title><img src={Garmin} alt="Avatar" width="128" height="50" /> </Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <br/>
                I worked as an intern for the aviation segment part time during the school year and full time over the summer. The work involved embedded C development for the Takeoff and Landing Data (TOLD) team where I:<br/>
                    <br/>• Developed 8 customer requested features in the aviation embedded C software stack and wrote comprehensive UI and system unit tests.
                    <br/>• Wrote a generic implementation of my team’s core code base with the aim of reducing the cost of implementation per customer
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">November 2018 - December 2019</small>
                </Card.Footer>
            </Card>
        </div>
    </div>
);

export default Experience;