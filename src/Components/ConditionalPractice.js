import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

class App extends React.Component {
    
    constructor () {
        super();
        
        this.state = {
            isLoggedIn: true,
            button1:'Logout',
            button2:'Login'
        }
        
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        this.setState({
            isLoggedIn:true
        })
    }
    
    handleLogout () {
       this.setState({
           isLoggedIn:false
       })
    }
    render() {
         return (
            <div>
                {
                    this.state.isLoggedIn ? 
                    <div>
                       <button onClick = {
                           this.handleLogin
                       }>{this.state.button2}</button>
                       <p>The User is Not Logged In</p>
                    </div>
                    :
                     <div>
                       <button onClick={
                           this.handelLogout
                       }>{this.state.button1}</button>
                       <p>The User has Logged Out</p>
                    </div>
                    
                }
            </div>
       )
    }
   
}

export default App
