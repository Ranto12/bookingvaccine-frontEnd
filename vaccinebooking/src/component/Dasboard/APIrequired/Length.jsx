import React, { useEffect, useState, useCallback } from 'react'
import axios from "axios"

// Api
import api from './../../../API/data/post'

const LengthPenguna = () => {
    const [pengguna, setPengguna]= useState([]);

    const Length = pengguna.length;
    console.log(`pengguna`, Length)

    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/users/roles/ADMIN")
                setPengguna(response.data)
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



const LengthAdmin = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const admin = datadashboard.length;
    // api
  // useEffect
  useEffect(()=>{
    // myApi()
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/users/roles/ADMIN")
            setDataDasboard(response.data.data)
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
    <div>{admin}</div>
  )
}

export default {LengthPenguna, LengthAdmin}