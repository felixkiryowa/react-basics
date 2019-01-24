import React from "react"

class ChangingState extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

        // Bind the method to the context of this class
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    //  this.setState({
    //      count:1
    //  })
        this.setState((previousValue) => {
            return {
                count: previousValue.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={
                    this.handleClick
                }>Change!</button>
            </div>
        )
    }
}

export default ChangingState;
