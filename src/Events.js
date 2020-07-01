import React, { Component } from 'react'
import { hospitalcon, web3 } from "./EthereumSetup";

import ipfs from './Ipfs'


class Events extends Component {
 
     
    constructor() { 
        super();
        //var recordEvent= hospitalcon.insuranceApplied();
        this.state = {
            Patients_nums:[],
            message: "",
            value: "",
            buffer:"",
            ipfsHash:""
          }
          this.onSubmit=this.onSubmit.bind(this);
          this.upload=this.upload.bind(this);
// this.Patients_nums=hospitalcon.insuranceApplied({},{ 
//     fromBlock:0,
//     toBlock:'latest'
// });
// var y=hospitalcon.insuranceApplied.result;
// console.log(y,"checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");







// hospitalcon.insuranceApplied.watch((error,result) => {
//     if(error){
//         console.log("error",error);
        
//     }
//     else{
//         console.log("result",result);
        
//     }
// });      

hospitalcon.getPastEvents('insuranceApplied',{
    fromBlock: 0,
    toBlock:'latest'
},(error,events)=> {console.log("events",events)
})



    }
   

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
   

   
    
    






//--event fucntion
componentDidMount(){
    
    this.triggerSupplierContractEventListeners();
}

  triggerSupplierContractEventListeners() {
    
    // this.Patients_nums.watch((err, eventLogs) =>{
    //     if (err) {  
    //         console.error('[Event Listener Error]', err);
    //     } else { 
    //         console.log('[Event Logs]', eventLogs);
    //         console.log('2nd event',eventLogs.blockNumber);
            
    //         this.setState({
    //            Patients_nums: [...this.state.Patients_nums,
    //               //  console.log("phonenumber",(eventLogs.args.name)),


    //                 parseInt(eventLogs.args.phonenum.toString())
                
                 
    //             ]

               
                
    //         });
    //     }
    //  })

  
  
 
 }

 upload(event){
     event.preventDefault()
     const file = event.target.files[0]
     const reader = new window.FileReader()
     reader.readAsArrayBuffer(file)
     reader.onloadend=()=>{
         this.setState({buffer:Buffer(reader.result)})
         console.log('buffer',this.state.buffer);
         
     }
     
 }

  onSubmit(event){
    event.preventDefault()
    ipfs.files.add(this.state.buffer,(error,result)=>{
    if(error){
        console.error(error)
    }
      var ipfsHash1 =result[0].hash;
      this.setState({ipfsHash:ipfsHash1})
    console.log('ipfsHash',ipfsHash1)
    localStorage.setItem("hash",JSON.stringify(ipfsHash1));
    
    }
    ) 
  } 


    render() {
        return  (
           <div className="aa">
            <nav>
                <a href="#">Record Uploaded to ipfs</a>
            </nav>
            <div>
                <h1>your image</h1>
                <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}` }/>
              <h2>upload Record</h2>
              <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.upload} />
                  <input type='submit' />
              </form>
              {/* <img src={`https://ipfs.io/ipfs/${this.state.ipfsHash}`} alt=""/> */}
              
            

            </div>
           </div>
        )
    }



}
export default Events;