import React from "react"
import { Card } from "react-bootstrap";
import Yellowstone from "../images/yellowstone/grandprismatic.jpg"
import GrandTetons from "../images/grandtetons/cabin.jpg"
import GrandCanyon from "../images/grandcanyon/view.jpg"
import AntelopeCanyon from "../images/antelopecanyon/view.jpg"
import MonumentValley from "../images/monumentvalley/view.jpg"
import BlackCanyon from "../images/blackcanyon/view.jpg"
import GreatSand from "../images/greatsanddunes/view.jpg"
import Arches from "../images/arches/view.jpg"
import Canyonlands from "../images/canyonlands/view.jpg"

const Travel = () => (
    <div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={Yellowstone} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Yellowstone</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={GrandTetons} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Grand Tetons</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text">
                <Card.Img src={BlackCanyon} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Black Canyon of the Gunnison</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={Canyonlands} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Canyonlands</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text">
                <Card.Img src={Arches} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Arches</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text">
                <Card.Img src={GrandCanyon} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Grand Canyon</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={AntelopeCanyon} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Antelope Canyon</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={MonumentValley} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Monument Valley</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
        <div class="w-50 mx-auto" style={{  paddingTop: 50, paddingBottom: 50, textAlign: "center"}}>
            <Card className="bg-dark text-white">
                <Card.Img src={GreatSand} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Great Sand Dunes</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </div>
    </div>
);

export default Travel;