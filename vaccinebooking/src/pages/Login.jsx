import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { AiFillEye } from 'react-icons/ai';
import Logo from "../assets/img/logo.png"
// import {Button, Col, Container, Form, Row} from 'react-bootstrap'


const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");


  // regex
  const RegexUsername = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  const RegexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

  // funtion
  // -onchange
  const onChangeUsername =(e)=>{
    const value = e.target.value;
    setUsername(value);
  }
  const onChangePassword =(e)=>{
    const value = e.target.value;
    setPassword(value);
  }
  // -onsubmit
  // const onSubmit =(e)=>{
  //   if(!RegexUsername.test(username)==false) {
  //     alert('Invalid format username');
  //   }
  // }

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://34.142.219.145:80/api/v1/auth/login", {
        username: username,
        password: password
      });
      navigate.push("/dasboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  }
  return (
    <>
      <div className="container">
        <div className="row  ">
          <div className="col-md-12 offset-md-3 m-0 d-flex row justify-content-center head ">
            <div className='d-flex justify-content-center'>
              <img src={Logo} alt="" />

            </div>


            <div className="card  ">

              <div className="t-h2  ">
                <h2>Mohon isi dengan detail di bawah </h2>
                <h2>dengan akun admin anda</h2>
              </div>

              <div className="input-user  ">
                <p>Username</p>
                <input type="text" id="Username" aria-describedby="emailHelp" value={username} onChange={onChangeUsername} />
              </div>
              <div className="input-password  ">
                <p>Password</p>
                <div className='brd '>
                  <div>
                    <input type="password" id="password" value={password} onChange={onChangePassword} />
                  </div>
                  <div>
                    <AiFillEye />
                  </div>
                </div>
                <div className="lupa-pass d-flex justify-content-end ">
                  <p className="m-0">Lupa password ?</p>
                </div>
              </div>
              <div className='btn'>
                <button onClick={Auth}>Masuk</button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login
