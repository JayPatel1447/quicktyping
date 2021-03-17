import React, {Component, useState} from "react";

import Preview from "./Preview";
import Speed from "./Speed"
import getText from "./getText"
import rocket from "../../assets/rocketBro.json";
import Lottie from "react-lottie";
import {Row, Col, Alert} from "reactstrap";

//Setting Initial State - setting default props
const initialState = {
    text: getText(),
    userInput: '',
    symbols: 0,
    sec: 0,
    finished: false,
}

// DefautOptions for RocketLiveImage - Animation
const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: rocket,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

/**
 * Dashboard component description in JSDoc format. Markdown is *supported*.
 */
class Dashboard extends Component{
    
    state = initialState; 

    /**
        * Method to Restart Game
        *
        * Clear The State
    */
    onRestart = () =>{
        this.setState(initialState)
    }

     /**
        * Get userInput Each Word - Seperated
        * setTimer() - Timer start from 60 
        * onFinish() - Timer finish at 0
        * Checking Correct typed Word
    */
    onUserInputChange = (e) => {
        const v = e.target.value;
        this.setTimer();
        this.onFinish(v);
        this.setState({
            userInput: v,
            symbols: this.countCorrectSymbols(v)
        })
    }

     /**
        * Once user complate whole para
        * Clear The state
        * Finish The Game 
       
    */
    onFinish(userInput){
        if(userInput === this.state.text)
        {
            clearInterval(this.interval)
            this.setState({
                finished: true
            })

        }
    }

     /**
        * Counting Correct Symobols at the same time
        * Ignoring space from both sides
        * Giving green and warning sign at the same time
    */
    countCorrectSymbols(userInput){
        const text = this.state.text.replace(' ','');
        return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length
    }

     /**
        * Setting the Timer
        * Using SetTimeOut/SetInterval 
        * Will be increased by 1 sec (1000 ms)
    */
    setTimer(){
        if(!this.state.started){
            this.setState({started:true});
            this.interval = setInterval(() => {
                this.setState(prevProps => {
                    return {sec: prevProps.sec + 1 }
                })},1000)
            
        }
    }
    // render() method
    render(){
    return (
        <>
        <div className="container mt-5 mb-5">
            <Row>
                 {/* Preview & input Area & Reset Button */}
                <Col className={"left-col"} xs={12} md={12} lg={5}>
                    <Preview text={this.state.text} userInput={this.state.userInput} />
                     {/* Become ReadOnly once the game is over */}
                    <textarea value={this.state.userInput} onChange={this.onUserInputChange} className="form-control mb-3" placeholder="Start typing..." readOnly={this.state.finished}>    </textarea>
                    <Speed sec={this.state.sec} symbols={this.state.symbols}/>
                    <div className="text-right">
                        <button className={"nav-start-button"} onClick={this.onRestart}>Restart</button>
                    </div>
                </Col>
                 {/* Illustartive Image - Right Side Content */}
                <Col lg={7} className={"right-col"}>
                <Lottie style={{paddingBottom: "680px"}} options={defaultOptions}
                            height={1000}
                            width={700}
                /> 
                </Col>
            </Row>
        </div>
        </>
    )}
};

export default Dashboard