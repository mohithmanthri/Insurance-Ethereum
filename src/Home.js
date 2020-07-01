import React from 'react';
import  { Link } from 'react-router-dom';

class Home extends React.Component{
render(){
    return (
      <div  style={{
        maxWidth: '400px',
        margin: '0 auto' }}>
            <br/>
          <div>
          <Link 
          to="/Hospital" >
          <button> <h5>Hospital Admin</h5></button>
       </Link>
       </div>
       <br/>
       <div>
         <Link 
         to="/Lab">
          <button><h5> Lab Admin</h5></button>
       </Link>
       </div>
       <br/>
       <div>
       <Link 
         to="/Patient">
          <button><h5> Patient</h5></button>
       </Link>
       </div>
       <br/>
       <div>
       <Link 
         to="/Insurance">
          <button><h5> Insurance Admin</h5></button>
       </Link>
       </div>
     </div>

    );
  }
}
  
  export default Home;