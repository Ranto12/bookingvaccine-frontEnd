import React from "react";
import { useState, useEffect } from "react";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";


const GetData = gql`
query MyQuery($_eq: String, $_eq1: String) {
  login(where: {password: {_eq: $_eq1}, username: {_eq: $_eq}}) {
    firstname
    id
    lastname
    password
    username
  }
}
`


function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [getTodo, { data: dataLazy, loading: loadingLazy, error }] = useLazyQuery(GetData);
    const navigate = useNavigate()
    useEffect(() => {
        if (dataLazy?.login.length === 1) {
            console.log(dataLazy)
            return navigate("/home")
        }

    }, [dataLazy])
    console.log("data", dataLazy)
    const handleName = (e) => {
        setName(e.target.value);
    }
    console.log(name)
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    console.log(password)
    const Login = () => {
        getTodo({ variables: { _eq1: password, _eq: name } });
    }

    if (loadingLazy) {
        <h3>Loading</h3>
    }
    else if (error) {
        console.log(error)
        return null
    }


    return (
        <>
            <input type="text" placeholder="Username" onChange={handleName} />
            <input type="text" placeholder="Password" onChange={handlePassword} />
            {dataLazy && <h3>Gagal</h3>}
            <button onClick={Login}>Login</button>
        </>
    )
}
export default Login