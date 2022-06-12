import React,{useState, useEffect} from 'react'
// api
import api from '../../../API/data/post.js'

const LengthRSUD = () => {
    // initial state and variables
    const [rsud, setRSUD]= useState([]);

    const Length = rsud.length;

// useEffect
    useEffect(()=>{
        // myApi()
        const PenggunaLengthPost = async()=>{
            try{
                const response = await api.get("/rsud")
                setRSUD(response.data)
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

export default LengthRSUD

