import React from 'react';


class States extends React.Component {
    constructor () {
        super();
        // set state
        this.state = {
            answer:"Yes"
        }
    }
    render() {
        return (
           <div>
               <h1>Is State Important To Know ? {this.state.answer}</h1>
           </div>

        )
    }
}

export default States;