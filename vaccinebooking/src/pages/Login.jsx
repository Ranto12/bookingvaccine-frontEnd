import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button, Col, Container, Form, Row} from 'react-bootstrap'


const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const Auth = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://34.142.219.145:80/api/v1/auth/login", {
                username: username,
                password: password
            });
            navigate.push("/dasboard");
        } catch(error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <>
            <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Login Form</h2>
        <div className="text-center mb-5 text-dark">Made with bootstrap</div>
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5" onSubmit={Auth}>

            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" placeholder="User Name" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" className="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
        </>
  )
}

export default Login
