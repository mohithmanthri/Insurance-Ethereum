import React from 'react';
import  { Link,Redirect } from 'react-router-dom';
import {hospitalcon} from "./EthereumSetup";
class Lab extends React.Component{
  constructor(props) {
    super(props);
    this.login=this.login.bind(this);
    this.state = {
      email:"",
      password:"",
      status:""
    }
  }
  async login(event) {
    event.preventDefault();
  
   await hospitalcon.methods
      .labLogin(this.state.email,this.state.password).call();
      console.log("fvefgv");
       this.setState({ status: "true" });
    //   if (status1) {
    //     this.setState({message:"ur insurance approved"});
    //   } else {
    //     this.setState({message:"ur insurance under process "});
    //   }
    //   console.log(this.message);
  }
render(){
    return (
      <div className="main1"style={{
        maxWidth: '650px',
       minHeight:'200px',
       margin: '0 auto' }}>
                 {
           this.state.status === "true"? <Redirect to="./Events" /> :
   
           null}
     <div className="login-form" >
       <form method="post" autoComplete="off">
    <h2 className="text-center">Login </h2>
           <div className="form-group">
           Email: <input
             type="email"
             value={this.state.email}
             onChange={event =>
               this.setState({ email: event.target.value })
             }
             className="form-control"
             placeholder="enter"
           />
           </div>
           <div>
           Password: <input
             type="password"
             value={this.state.password}
             onChange={event =>
               this.setState({ password: event.target.value })
             }
             className="form-control"
             placeholder="enter"
           />
           </div> 
           <button
       className="btn" 
       onClick={this.login}>
      Login
     </button>
           <Link    
                  to="/">
                      <button>
                  Back
                </button>
                </Link>
           </form>
           </div>

           </div>
    );
  }
}
  
  export default Lab;