// import React, {Component} from "react"

// class Forms extends Component {
//     constructor() {
//         super()
//         this.state = {
//             firstName:'',
//             lastName:'',
//             isFriendly:true,
//             gender:''
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     // handleChange(event) {
//     //    this.setState({
//     //        [event.target.name]:event.target.value
//     //    });
//     // }

//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : 
//         this.setState({ [name]: value })
//     }
    
//     render() {
//         return (
//             <form>
//                 <input type="text" name="firstName" placeholder="First Name"  value={this.state.firstName} onChange={this.handleChange}/>
//                 <br></br>
//                 <br></br>
//                 <input type="text" name="lastName" placeholder="Last Name"  value={this.state.lastName} onChange={this.handleChange}/>
//                 <h1>{this.state.firstName}  || {this.state.lastName}</h1>
//                 <br></br>
//                 <textarea value={'Some default value here'}/>
//                 <br></br>
//                 <input 
//                     type="checkbox" 
//                     name="isFriendly"
//                     checked={this.state.gender === "male"}
//                     onChange={this.handleChange}
//                 />
//                 <label>Male</label>
//                 <input 
//                     type="radio" 
//                     name="gender"
//                     value="male"
//                     checked={this.state.gender === "female"}
//                     onChange={this.handleChange}
//                 />
//                 <label>Female</label>
//                 <input 
//                     type="radio" 
//                     name="gender"
//                     value="female"
//                     checked={this.state.isFriendly}
//                     onChange={this.handleChange}
//                 />
//             </form>
//         )
//     }
// }

// export default Forms;



import React from "react";


class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      emailaddress: "",
      password: "",
      editor: "",
      message: "",
      terms: false,
      test: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Forms in React</span>
              </div>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="control-label">Name</label>
                  <div >
                    <input
                      className="form-control"
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="control-label">Email Address</label>
                  <div>
                    <input
                      className="form-control"
                      type="email"
                      name="emailaddress"
                      value={this.state.emailaddress}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="control-label">Password</label>
                  <div>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="control-label">Pick your editor</label>
                  <div>
                    <div>
                      <select
                        className="form-control"
                        value={this.state.editor}
                        name="editor"
                        onChange={this.handleChange}
                      >
                        <option value="vscode">VsCode</option>
                        <option value="atom">Atom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="control-label">What do you like about React</label>
                  <div>
                    <textarea
                      className="form-control"
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                 <div class="form-check">
                    <input name="terms"
                        type="checkbox" 
                        checked={this.state.terms}
                        onChange={this.handleChange} className="form-check-input" />
                    <label className="form-check-label" for="exampleCheck1">
                    I agree to the{" "}
                      <a href="https://google.com">terms and conditions</a>
                    </label>
                </div>
                <label className="control-label">
                      Do you test your React code?
                </label>
                <div className="form-check">
                    <input className="form-check-input" type="radio"  name="test"
                        onChange={this.handleChange}
                        value="Yes"
                        checked={this.state.test === "Yes"} 
                        checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio"   name="test"
                        onChange={this.handleChange}
                        value="No"
                        checked={this.state.test === "No"} />
                    <label className="form-check-label" for="exampleRadios2">
                        No
                    </label>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>Full Name: {this.state.fullname}</p>
                  <p>Email Address: {this.state.emailaddress}</p>
                  <p>Password: {this.state.password}</p>
                  <p>Choice in Editor: {this.state.editor}</p>
                  <p>Why React: {this.state.message}</p>
                  <p>Terms and Condition: {this.state.terms}</p>
                  <p>Do you test?: {this.state.test}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;

