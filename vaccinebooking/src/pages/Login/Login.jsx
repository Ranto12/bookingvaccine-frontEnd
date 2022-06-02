import React, { useState, useEffect } from 'react'
import api from '../../API/data/post'
import { useNavigate } from 'react-router-dom';
import Form from "./Form"

const Login = ({item, key}) => {
    //state and variables
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    //useeffect
    useEffect(()=>{
      const fetchPosts = async()=>{
          try{
              const response = await api.get("/user")
              setUser(response.data);
          } catch(err){
              if(err.response){
                  //not in the 200 response range
                  console.log(err.response.data)
                  console.log(err.response.status)
                  console.log(err.response.headers)
              }else{
                  console.log(`Error ${err.message}`);
              }
          }
      }
      fetchPosts();
      
  },[])
  console.log(user)

  useEffect(()=>{
    if(user.length !== 0){
      console.log("datanya ada")
      navigate("/")
    } else{
      console.log("dta null")
    }
  }, [])


  // useEffect(()=>{
    
  // })
    //funtion 
    // const handleInput = (value, index)=>{
    //   const newInputs = inputs.map((input, inputIdx)=>{
    //     if(inputIdx === index){
    //       return{
    //         ...input,
    //         value: value
    //       };
    //     }
    //     return input;
    //   });
    //   setInputs(newInputs)
    // };

    /*
    useEffect(()=>{
      if(reponse.data.length ===0 ) {
        alert("ini salah")
      } else{
        localStorage.setItem("token", JSON.stringify(data.user[0]));
      }
    })
    */


    const handleUsername = (e) => {
      setUsername(e.target.value);
    }
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleSubmid = () => {
        
    }

    const handleSubmitForm = (e) => {
      e.preventDefault();
      user({
        variables: {
          username : user.username,
          password: user.password
        },
      });
    }

  return (
    <div className='container m-1000'>
      <div className='container'>
          VACCINE
      </div>
      <div>
      <form>
           <Form handleUsername={handleUsername}  handlePassword={handlePassword}/>
           <button onClick = {handleSubmitForm}>gasin</button>
      </form>
      </div>
    </div>
  )
}
export default Login