import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
  const [data, changeData] = useState(
    { title: '' });
  const [result, setResult] = useState([])

  const inputHandler = (event) => {
    changeData({ ...data, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    console.log(data)
    axios.post('http://localhost:8080/search', data)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
  }
//... delete using api....//
const deleteCourse=(id)=>{
let input={  "_id":id}
axios.post("http://localhost:8080/delete",input).then(
  (response)=>{
    console.log(response.data)
    if (response.data.status=="success") {
      alert("successfully deleted")
      
    } else {
      alert("error in deletion")
      
    }
  }
).catch()
}
  return (
    <div>
      <NavBar />
      <h1><center>SEARCH COURSE</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">COURSE</label>
            <input
              type="text"
              className="form-control"
              name='title'
              value={data.title}
              onChange={inputHandler}
            />
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <center><button className="btn btn-success" onClick={readValue}>Search</button></center>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">TITLE</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">DATE</th>
                  <th scope="col">DURATION</th>
                  <th scope="col">VENUE</th>
                  <th scope="col">TRAINER NAME</th>
                </tr>
              </thead>
              <tbody>
                {result.map((value, index) => (
                  <tr key={index}>
                    <td>{value.title}</td>
                    <td>{value.desc}</td>
                    <td>{value.date}</td>
                    <td>{value.duration}</td>
                    <td>{value.venu}</td>
                    <td>{value.trainerName}</td>
                    <td><button className="btn btn-danger"onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
