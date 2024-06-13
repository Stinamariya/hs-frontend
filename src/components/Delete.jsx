import React from 'react'
import NavBar from './NavBar'

const Delete = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>DELETE COURSE</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">TITLE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <br />
                    <center><button className="btn btn-danger">Delete</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete