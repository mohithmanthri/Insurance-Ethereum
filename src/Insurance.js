import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import {web3,hospitalcon} from "./EthereumSetup";
import Events from "./Events"

 export default class Insurance extends Component{
    constructor() {
        super();
        var hash=JSON.parse(localStorage.getItem("hash"));
        this.got_approve = this.got_approve.bind(this);
        this.state = {
          num: "",
          hash1:hash
         // hash:super.state.ipfsHash

        };
    }
    async got_approve(event) {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await hospitalcon.methods
          .getApproved(
            this.state.num,
          
          )
          .send({ from: accounts[2], gas: 2100000 });
        // this.setState({ message: "Record approved!" });
         console.log("approved");
      }
   render(){
     return(


      <div className="col-md-12"  style={{
        maxWidth: '550px',
        margin: '0 auto' }}>
      <h3  className="text-center">Insurance Page</h3>
      <h1>Records</h1>
                <img src={`https://ipfs.io/ipfs/${this.state.hash1}` }/>
      <div>
        Approve Record:<input
                type="number"
                value={this.state.num}
                onChange={event => this.setState({ num: event.target.value })}
                className="form-control"
                placeholder="phone num"
              />
              <button
                className="btn"
                onClick={this.got_approve}
              >
                Approve
              </button>
      </div>
      <Link 
                to="/">
                <button> Logout</button>
                </Link>
       </div>
     );
   }
  }