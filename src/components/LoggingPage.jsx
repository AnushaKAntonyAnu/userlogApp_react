import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const LoggingPage = () => {
    return (
        <div>
           

            <br></br><h3><center><u>User LogIn</u></center></h3><br></br>
            <div className="container">
                <div className="card" >
                    <div class="card-body">

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">UserName</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" name="" id="" className="form-control" />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success">Log In</button>
                                    <p>New User Click Here<Link to="/add">Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoggingPage