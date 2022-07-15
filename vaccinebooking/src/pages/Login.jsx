import React, { useState } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { IconButton } from "@mui/material";
import Logo from "../assets/img/logo.png";
import Swal from "sweetalert2";

// api
import {URL} from "../API/URL";
const Login = () => {
  // initial state and variable
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // showPassword
  const [showPassword, setShowPassword] = useState(false);

  // errorState
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  // regex
  const RegexUsername = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/; 
  const RegexPassword =/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  // ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$
  // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
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
        await axios.post(`${URL}/auth/login`, {
          username: username,
          password: password,
        }).then(
          res => {
            if (res.data !== null) {
              console.log(res.data);
              window.localStorage.setItem("token", res.data.data.token);
              const token = window.localStorage.getItem("token");
              const decode = jwt_decode(token);
              window.localStorage.setItem("id_users", decode.id_user);
              window.localStorage.setItem("role", decode.roles);
              // console.log(window.localStorage.getItem("role"));
              // console.log("hasil", decode);
              if (window.localStorage.getItem("role") === "ADMIN" || window.localStorage.getItem("role") === "SUPER ADMIN") {
                Swal.fire('Berhasil!', 'Anda Telah Berhasil Login!', 'success');
                window.location.reload();
                navigate("/Dashboard");
              } else {
                Swal.fire({
                  title: "Oops...",
                  text: "You are not authorized to access this page!",
                  icon: "error",
                  confirmButtonText: "OK",
                });
                localStorage.removeItem("token");
              }
            } else if (res.data === null) {
              Swal.fire({
                title: 'Gagal!',
                text: 'Login Gagal!',
                icon: 'error',
                confirmButtonText: 'ya, saya mencoba kembali',
              });
            }
          }
        )
      } catch (error) {
        console.log("error", error);
        if(error.response.status === 401){
          Swal.fire({
            title: 'Gagal!',
            text: 'Login Gagal!',
            icon: 'error',
            confirmButtonText: 'ya, saya mencoba kembali',
          });
        }
      }
    }
  };
  // console.log(msg ,"msg");

  return (
    <>
      <div className="container">
        <div className="row  ">
          <div className="col-md-12 offset-md-3 m-0 d-flex row justify-content-center head ">
            <div className="d-flex justify-content-center">
              <img src={Logo} alt="" />
            </div>

            <div className="card card-Login tabel  ">
              <div className="t-h2  ">
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
                    className="padding-input"
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
                      className="padding-input"
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
                {/* <div className="lupa-pass d-flex justify-content-end ">
                  <p >Lupa password ?</p>
                </div> */}
              </div>
              <div className="btn " >
                <button className="Pointer-Booking" onClick={Auth}>Masuk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;