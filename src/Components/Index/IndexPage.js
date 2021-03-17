import React, {useState} from "react";
import Navbar from "../WelcomePage/NavBar/NavbarHome"
import HomePage from "../WelcomePage/HomePage/Home"

/* IndexPage - Will rendered diff components 
   Header - Navbar
   Main Content - HomePage
   Footer - 
*/
const IndexPage = props => {

    console.log(props.history);
    return(
        <div className={"test"}>
        <div className={"circle-blue"}>
            <Navbar displayLogin={true} history={props.history} />
            <HomePage history={props.history} />
        </div>
        </div>
    )
}

export default IndexPage