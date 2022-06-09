import React, { useEffect, useState } from 'react'

// Api
import api from './../../../API/data/post'

const LengthPenguna = () => {
    const [pengguna, setPengguna]= useState([]);
    const Length = pengguna.length;
    console.log(`pengguna`, Length)



    // useEffect
    useEffect(()=>{
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/pengguna")
                setPengguna(response.data);
            } catch(err){
                if(err.response){
                    //not in the 200 response range
                    console.log(err.response.data)
                    console.log(err.response.status)
                    console.log(err.response.headers)
                } else{
                    console.log(`Error ${err.message}`)
                }
            }
        }
        PenggunaLengthPost();
    },[])
  return (
    <div>
        {Length}
    </div>
  )
}

export default LengthPenguna

//admin
