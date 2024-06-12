import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Appoinment = () => {
    const [data,changeData]=useState(
        
            { pname: '' })
            const [result, setResult] = useState([])
        
    
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:
            event.target.value
        })
    }
    const readValue=()=>{
        console.log(data)
    
    axios.post("http://localhost:8080/add").then(
        (response)=>{
            setResult(response.data)
        })
            
    .catch((error) => {
        console.log(error)
      })
}
  return (
    <div>
        <NavBar/>
        <h1><center>ADD NEW APPOINMENT</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Patient Name</label>
                            <input type="text" className="form-control"name='pname'value={data.pname}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Doctor Name</label>
                            <input type="text" className="form-control"name='dname'value={data.dname}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" name="date" id="" className="form-control"value={data.date}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br />
                            <center><button className="btn btn-success"onClick={readValue}>Add Appoinment</button></center>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
           
                </div>
            </div>
  )
        
}


export default Appoinment