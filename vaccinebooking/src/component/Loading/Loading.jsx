import { useEffect, useState } from "react";
import Spiner from "../../assets/Spinners/Spinners";

const Loading = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
    })
    if(loading){
        return <Spiner/>
    }
}

export default Loading