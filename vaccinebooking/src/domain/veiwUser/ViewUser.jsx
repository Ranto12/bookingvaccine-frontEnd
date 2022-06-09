import React, { useEffect, useState } from 'react'
import api from '../../API/data/post'
import Login from '../../pages/Login/Login';

const ViewUser = () => {
    const [user, setUser] = useState([]);


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
        console.log(user)
    },[])

    console.log("ini datanya",user)

  return (
    <div>
      {user.map((item)=>{
          return(
              <>
              
              <div key={item.id}>
                  <div>{item.name}</div>
                  <div>{item.password}</div>
                  {/* <Login item ={item} key={item.id} /> */}
              </div>
              </>
          )
      })}
    </div>
  )
}

export default ViewUser
