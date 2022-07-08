import api from '../../API/data/post';

import React, { useEffect, useState } from 'react'

const CekinAPI = () => {
    const [pengguna, setPengguna]= useState([]);
    const Length = pengguna.length;
    const token = localStorage.getItem('token');

    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/users", {
                    headers: { 
                         'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    } 
                })
                setPengguna(response.data.data);
                console.log(response.data.data);
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
    <div>cekinAPI</div>
  )
}

export default CekinAPI