import React from 'react'
import profile from "../assest/profile.png";
import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <>
        <div className="signup-main">
        <div className="container">
                <h2>Login</h2>
                <p>Happy to see you back!</p>

                <form className="input-section" action="POST">
                    <div className="profile-div">
                        <img src={profile} alt=""/>
                    </div>
                    <div className="input-div">
                        
                        <input type="text" placeholder="Phone Number"/>
                        
                        <label>or</label>
                        <div className="google-icon">
                            <div className="FaGoogle-icon"><FaGoogle/></div> 
                            <div className="continew-google">Continue with google </div>
                        </div>
                        <button type="submit">Login</button>
                        <Link className="have-Account" to="/signIn">Create new account</Link>
                    </div>
                </form>
                </div>
            </div>
    </>
  )
}

export default Login
