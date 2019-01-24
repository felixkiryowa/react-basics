import React from "react"

function HandlingEvents() {
    return (
        <div>
            <img onMouseOver={
                () => {
                    console.log('Image was hovered');
                }
            } src="https://www.fillmurray.com/200/100" alt=''/>
            <br />
            <br />
            <button onClick={() => {
                console.log('I was Clicked !!');
            }}>Click me</button>
        </div>
    )
}

export default HandlingEvents;
