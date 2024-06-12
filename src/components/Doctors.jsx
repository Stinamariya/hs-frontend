import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Doctors = () => {
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
        <h1><center>ADD DOCTORS</center></h1>
        <div className="container">
            <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Doctor Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Speciality</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br />
                        <center><button className="btn btn-success">Add Doctor</button></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Doctors