import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import Logo from "../assets/img/logo.png";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";
import "../assets/Style/Login.css"

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  // showPassword
  const [showPassword, setShowPassword] = useState(false);

  // errorState
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  // regex
  const RegexUsername = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  const RegexPassword =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

  // funtion
  // -onchange
  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const Auth = async (e) => {
    e.preventDefault();

    if (!RegexUsername.test(username)) {
      console.log("Username error");
      setErrorUsername(true);
    } else {
      setErrorUsername(false);
    }
    if (!RegexPassword.test(password)) {
      console.log("Password error");
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }

    if (RegexUsername.test(username) && RegexPassword.test(password)) {
      try {
        await axios.post("http://35.247.142.238/api/v1/auth/login", {
          username: username,
          password: password,
        });
        navigate.push("/dasboard");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row  ">
          <div className="col-md-12 offset-md-3 m-0 d-flex row justify-content-center head ">
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="" />
            </div>

            <div className="card card-Login tabel  ">
              <div className="t-h2">
                <h2>Mohon isi dengan detail di bawah </h2>
                <h2>dengan akun admin anda</h2>
              </div>

              <div className="input-user  ">
                <p>Username</p>
                <div style={{ height: "63px", border: "0px solid" }}>
                  <input
                    required
                    type="text"
                    id="Username"
                    aria-describedby="emailHelp"
                    value={username}
                    onChange={onChangeUsername}
                  />
                  {errorUsername && (
                    <div className="d-flex " style={{ width: "50%" }}>
                      <p style={{ color: "red", margin: "3px 0px 0px 0px", fontSize: "10px" }}>
                        Username Tidak Sesuai atau Salah
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="input-password  ">
                <p>Password</p>
                <div className="brd ">
                  <div>
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={onChangePassword}
                    />
                    {errorPassword && (
                      <p style={{ color: "red", margin: "8px 0px 0px 0px", fontSize: "10px" }}>
                        Password Tidak Sesuai atau Salah
                      </p>
                    )}
                  </div>
                  <div style={{ marginLeft: "-1vw", marginTop: "-1vh" }}>
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      <AiFillEye />
                    </IconButton>
                  </div>
                </div>
                <div className="lupa-pass d-flex justify-content-end ">
                  <p >Lupa password ?</p>
                </div>
              </div>
              <div className="btn">
                <button onClick={Auth}>Masuk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;