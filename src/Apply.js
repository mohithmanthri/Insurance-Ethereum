import React from "react";
import  { Link,Redirect } from 'react-router-dom';
import {web3,hospitalcon} from "./EthereumSetup";

export default class Apply extends React.Component {
    constructor() {
        super();
         var result1=JSON.parse(localStorage.getItem("patient"));
         console.log(result1);
        

            var a=result1[1];
            console.log(a);
        
         
        this.get_status=this.get_status.bind(this);
        this.get_Apply=this.get_Apply.bind(this);
        this.state = {
            Patients_IDs: [],
           // email: "",
            phnNum: "",
            phnNum1: "",
            a1:a,
            status:""
          }
          hospitalcon.getPastEvents('insuranceApplied',{
            fromBlock: 0,
            toBlock:'latest'
        },(error,events)=> {console.log("events",events)
        })
        }
      async get_Apply(event) {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
         await hospitalcon.methods
          .Apply(
             this.state.a1,
            this.state.phnNum
          )
           .send({ from: accounts[3], gas: 2100000 });
        this.setState({ message: "Applied for Insurance" });
        console.log(this.message);
      }
    
      async get_status(event) {
        event.preventDefault();
      
        const status1=await hospitalcon.methods
          .getStatus(this.state.phnNum1).call();
          if (status1) {
            this.setState({message:"ur insurance approved"});
          } else {
            this.setState({message:"ur insurance under process "});
          }
          console.log(this.message);
      }
  
      
    render() {
        return (
             <div style={{
                maxWidth: '550px',
                margin: '0 auto' }}>
                    <div>
                    <h2>Apply Insurance</h2>
                    <div>
            Email: {this.state.a1}
                  </div>
                  <div>
                    PhoneNum: <input
                    type="number"
                     value= {this.state.phnNum}
                    onChange={event => this.setState({ phnNum: event.target.value })}
                    className="form-control"
                    placeholder="enter mobile num"
                  />
                   </div>
                   <br/>
                  <div>
                  <button
                    className="btn"
                    onClick={this.get_Apply}
                  >
                   Apply
                  </button>
                  <br/>
                  {
                this.state.status === "true"? <Redirect to="/" /> :
        
                null}
                <Link to="/">
                  <button onClick={this.logout} >Logout</button> </Link>
                  </div>
                    </div>
              
                  {this.state.message && (
                    <p className="alert ">
                      {this.state.message}
                    </p>
                  )}
               <div>
                <h2>Check status</h2>
            Phn.Number: <input
                    type="number"
                    value={this.state.phnNum1}
                    onChange={event => this.setState({ phnNum1: event.target.value })}
                    className="form-control"
                    placeholder="enter mobile num"
                  />
                  <button
                    className="btn"
                    onClick={this.get_status}
                  >
                    Status
                  </button>
                     </div>
                     </div>
    
            );
    
            }
}