import React,{useState, useEffect} from 'react'
import api from '../../../API/data/post.js'

const LengthPuskesmas = () => {
    const [pusekesmas, setPusekesmas]= useState([]);

    const Length = pusekesmas.length;
    console.log(`Admin`, Length)


    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/puskesmas")
                setPusekesmas(response.data)
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

export default LengthPuskesmas