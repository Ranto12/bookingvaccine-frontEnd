import React, { useEffect, useState, useCallback } from 'react'
import axios from "axios"

// Api
import api from './../../../API/data/post'

export const LengthPenguna = () => {
    const [pengguna, setPengguna]= useState([]);
    const Length = pengguna.length;

    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/users/roles/USER")
                setPengguna(response.data.data)
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



export const LengthAdmin = () => {
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

export const LengthKecamatan = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const area = datadashboard.length;
    // api
  // useEffect
  useEffect(()=>{
    // myApi()
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/area")
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
    <div>{area}</div>
  )
}
export const LengthRSUD = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const rsud = datadashboard.length;

    console.log(`rsud`, datadashboard)
    // api
  // useEffect
  useEffect(()=>{
    // myApi()
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/facility/category/2")
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
    <div>{rsud}</div>
  )
}


