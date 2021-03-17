import React from "react";
import styles from "./Home.css"
import {Row, Col} from "reactstrap";
import speedImage from "../../../assets/speedImage.png"

const Home = props => {
    return (
        <div className={"main-page container"}>
            {/* Reactstrap Row and Col */}
            <Row>
                 {/* Elevator Pitch - Simply About us Page and Start  */}
                <Col className={"main-left-content"} xs={12} md={6} lg={6}>
                    <span className={"intro-line"}>That isn't writing at <br></br>all, its</span>
                    <span className={"typing-name"}>Typing...</span>
                    <p className={"market-line"}>Lets go and get your hand dirty on keyboard</p>
                    <button className={"grow-with-us-button"} onClick={() => props.history.push("/dashboard")}>
                        Let's Go !!!!
                    </button>
                </Col>
                {/* Illustartive Image - Right Side Content */}
                <Col className={"main-right-content"}>
                    <img src={speedImage} height={340} className={'metrics-image'} /> 
                </Col>
            </Row>
        </div>
    )
};

export default Home