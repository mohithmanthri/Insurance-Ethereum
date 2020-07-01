import React from 'react';
import  { Link } from 'react-router-dom';

class Hadmin extends React.Component{
render(){
    return (
        <div id="div1" style={{
            maxWidth: '400px',
            margin: '0 auto' }}>
      <h1>Register</h1>
  
         <div>
         <Link 
          to="/PatReg" >
          <button> <h5>Patient</h5></button>
       </Link>
         </div>

       <br/>
       <div>
       <Link 
         to="/LabReg">
          <button><h5>Lab Admin</h5></button>
       </Link>
       </div>
     
  
      
       <br/>
       <div>
       <Link 
         to="/">
          <button>Logout</button>
       </Link> 
       </div>
     </div>

    );
  }
}
  
  export default Hadmin;