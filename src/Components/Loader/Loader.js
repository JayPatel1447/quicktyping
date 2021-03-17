//Author : Jay Patel
import React, {useState, useEffect} from "react";
//import {Row, Col} from "reactstrap";

const Loader = props => {

    useEffect(() => {
        const timer = setTimeout(() => {
            props.history.push("/home");
        }, 2000);
        return () => props.history.push("/home");
    }, []);

    return (
        <>
           
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
            </div>

        </>

    )
};

export default Loader
