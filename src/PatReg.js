import React from 'react';
import  { Link } from 'react-router-dom';
import {web3,hospitalcon} from "./EthereumSetup";
class PatReg extends React.Component{
    constructor(props) {
        super(props);
        this.regis_tration=this.regis_tration.bind(this);
        this.state = {
          name:"",
          email:"",
          password:"",
          phnNum:"",
          address:""
        }
        
      }
      async regis_tration(event) {
          event.preventDefault();
          const accounts = await web3.eth.getAccounts();
          await hospitalcon.methods
          .Register(
              this.state.name,
              this.state.email,
              this.state.password,
              this.state.phnNum,
              this.state.address,
            )
            .send({ from: accounts[0], gas: 2100000 });
        }
      render() {
          return (
               <div className="main1"style={{
                   maxWidth: '650px',
                  minHeight:'200px',
                  margin: '0 auto' }}>
                <div className="registration-form" >
                  <form method="post" autoComplete="off">
               <h2 className="text-center">Patient Details </h2>
                    <div className="form-group">
                      Name: <input
                        type="text"
                        value={this.state.name}
                        onChange={event =>
                          this.setState({ name: event.target.value })
                        }
                        className="form-control"
                        placeholder="enter"
                      />
                      </div>
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
                      <div>
                      Number: <input
                        type="number"
                        value={this.state.phnNum}
                        onChange={event =>
                          this.setState({ phnNum: event.target.value })
                        }
                        className="form-control"
                        placeholder="enter phone number"
                      />
                      </div>
                      <div>
                      Address: <input
                        type="address"
                        value={this.state.address}
                        onChange={event =>
                          this.setState({ address: event.target.value })
                        }
                        className="form-control"
                        placeholder="enter "
                      />
                      </div >
                    
                  
                      <button
                  className="btn"
                  onClick={this.regis_tration}>
                  Register
                </button>
              
                <Link 
                  to="/Hospital">
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
  
  export default PatReg;