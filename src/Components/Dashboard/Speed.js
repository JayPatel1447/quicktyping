import React from 'react';

export default (props) => {

if(props.symbols !== 0 && props.sec !== 0){

    /**
     * Formula to count Wpm
     * ex:if you typed 200 characters in 1 minute, your net wpm typing speed would be (200 characters / 5) / 1 min = 40 WPM.
     */
    const wpm =  (props.symbols/5) / (props.sec/60)

    return(
        <div>{Math.round(wpm)} wpm</div>
        
    )
}
    return null
}