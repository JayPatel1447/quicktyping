import React from 'react';

export default (props) => {

    const text = props.text.split('');
    
    /**
        * Key & Value Pair
        * Comparing userInput and default text to disaply warning
    */
    return(
        <div className="border rounded p-2 mb-4">
            {
                text.map((s,i) => {
                    let color;
                    if(i < props.userInput.length){
                        color = s === props.userInput[i] ? '#dfffa0' : '#fcbea4';
                    }
                    return <span key={i} style={{backgroundColor : color }}>{s}</span>
                })
            }
        </div>
    )
}