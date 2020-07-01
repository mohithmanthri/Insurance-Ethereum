import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Home from './Home';
import Hadmin from './Hospital';
import Patient from './Patient';
import Lab from './Lab';
import Insurance from './Insurance';
import LabReg from './LabReg';
import PatReg from './PatReg';
import Events from './Events';
import Apply from './Apply';



class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }
  render() {
    return (
    <div >
                <div className="container" >
                  <h1>Health insurance</h1>
                      </div>
                      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Patient" component={Patient} />
        <Route path="/Hospital" component={Hadmin} />
        <Route path="/Lab" component={Lab} />
        <Route path="/Insurance" component={Insurance} />
        <Route path="/LabReg" component={LabReg} />
        <Route path="/PatReg" component={PatReg} />
        <Route path="/Events" component={Events} /> 
        <Route path="/Apply" component={Apply} />       
    </Router>

               
    </div>
  );
}
}

export default App;
