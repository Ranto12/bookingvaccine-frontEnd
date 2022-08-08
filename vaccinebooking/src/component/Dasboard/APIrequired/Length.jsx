import React, { useEffect, useState } from 'react'
import Spiner from '../../../assets/Spinners/Spinners';
// Api
import api from './../../../API/data/post'
const token = localStorage.getItem('token');

//length pengguna
export const LengthPenguna = () => {
    const [pengguna, setPengguna]= useState([]);
    const [loading, setLoading] = useState(true);
    const Length = pengguna.length;
    // console.log(token);

    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/users/roles/USER", {
                    headers:{'Authorization': `Bearer ${token}`}
                })
                setPengguna(response.data.data);
            } catch(err){
                console.log(err);
            }finally{
              setLoading(false);
            }
          }
        PenggunaLengthPost();
    },[])
    if (loading) {
      return <Spiner />
    }
  return (
    <div>
        {Length}
    </div>
  )
}

//length admin
export const LengthAdmin = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const admin = datadashboard.length;
  useEffect(()=>{
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/users/roles/ADMIN", {
                headers:{'Authorization': `Bearer ${token}`}
            })
            setDataDasboard(response.data.data)
        } catch(err){
            console.log(err);
        }
    }
    PenggunaLengthPost();
},[])
  return (
    <div>{admin}</div>
  )
}

//length kecamatan
export const LengthKecamatan = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const area = datadashboard.length;
  useEffect(()=>{
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/area", {
                headers:{'Authorization': `Bearer ${token}`}
            })
            setDataDasboard(response.data.data)
        } catch(err){
            console.log(err);
        }
    }
    PenggunaLengthPost();
},[])
  return (
    <div>{area}</div>
  )
}
//length rsud
export const LengthRSUD = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const rsud = datadashboard.length;
  useEffect(()=>{
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/facility/category/1", {
                headers:{'Authorization': `Bearer ${token}`}
            })
            setDataDasboard(response.data.data)
        } catch(err){
            console.log(err);
        }
    }
    PenggunaLengthPost();
},[])
  return (
    <div>{rsud}</div>
  )
}

//length puskesmas
export const LengthPuskesmas = () => {
    const [datadashboard, setDataDasboard] = useState([]);
    const pusekesmas = datadashboard.length;
  useEffect(()=>{
    const PenggunaLengthPost = async()=>{
        try{
            const response = await api.get("/facility/category/2", {
                headers:{'Authorization': `Bearer ${token}`}
            })
            setDataDasboard(response.data.data)
        } catch(err){
            console.log(err);
        }
    }
    PenggunaLengthPost();
},[])
  return (
    <div>{pusekesmas}</div>
  )
}