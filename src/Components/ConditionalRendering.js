import React from 'react';
import Conditional from './Conditional';


class ConditionalRendering extends React.Component{
    constructor() {
        super();

        this.state = {
            isLoading:true
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isLoading:false
            })
          }, 2000)
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading......</h1> : 
                  <Conditional />
                }
                
            </div>
        )
    }
}

export default ConditionalRendering;