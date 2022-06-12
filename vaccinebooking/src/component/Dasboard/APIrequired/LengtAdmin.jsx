import React, { useEffect, useState, useCallback } from 'react'
import axios from "axios"

// Api
import api from '../../../API/data/post'

const LengthAdmin = () => {
    const [admin, setAdmin]= useState([]);

    const Length = admin.length;
    console.log(`Admin`, Length)


    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/admin")
                setAdmin(response.data)
                ;
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

export default LengthAdmin

//admin
