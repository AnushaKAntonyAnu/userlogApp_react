import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddUser = () => {
    const[data,setData]=useState(
        
            {
                "name":"",
                "dob":"",
                "bloodgroup":"",
                "mobileno":"",
                "address":"",
                "place":"",
                "district":"",
                "pincode":"",
                "email":"",
                "username":"",
                "password":"",
                "confirmpassword":""
            }
        
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        if(data.password == data.confirmpassword){
        axios.post("http://localhost:8086/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("SuccessFully Added")
                } else {
                    alert("Error")
                }
            }
        )
    }else{
    alert("Password NoTMatching")
}
    }
    return (
        <div>
           
           <br></br> <h3><center><u>USER REGISTRATION</u></center></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="text" className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group</label>
                                <select  id="" className="form-control" name='bloodgroup' value={data.bloodgroup} onChange={inputHandler}>
                                    <option value="A+">A+</option>
                                    <option value="A_">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile No</label>
                                <input type="text" className="form-control" name='mobileno' value={data.mobileno} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control"name='place' value={data.place} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Distrcit</label>
                                <select id="" className="form-control"name='district' value={data.district} onChange={inputHandler}>
                                    <option value="Thrivanthapuram">Thrivanthapuram</option>
                                    <option value="Kollam">Kollam</option>
                                    <option value="Alappuzha">Alappuzha</option>
                                    <option value="Pathanamthitta">Pathanamthitta</option>
                                    <option value="Kottayam">Kottayam</option>
                                    <option value="Idukki">Idukki</option>
                                    <option value="Ernakulam">Ernakulam</option>
                                    <option value="Thrissur">Thrissur</option>
                                    <option value="Palakkad">Palakkad</option>
                                    <option value="Malapuaram">Malapuaram</option>
                                    <option value="Kozhikode">Kozhikode</option>
                                    <option value="Wayanad">Wayanad</option>
                                    <option value="Kannur">Kannur</option>
                                    <option value="Kasaragod">Kasaragod</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="text" className="form-control"name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">UserName</label>
                                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                  <input type="password"  id="" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password"  id="" className="form-control" name='confirmpassword' value={data.confirmpassword} onChange={inputHandler}/>
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center> <button className="btn btn-success" onClick={readValue}>Submit</button></center> 
                            </div>
                            <p>Back LogIn Click Here<Link to="/">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser