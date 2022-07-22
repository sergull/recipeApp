import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch=(url)=>{

    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{fetchData()},[]);

    const fetchData= async()=>{
        try{
        const {data:response}=await axios.get(url);
        setData(response);
        console.log(response); 
        setLoading(false)
        }
        catch(err){
            setError(err.message);
            setLoading(false);
        }
       
    }
    return {data,error,loading};
}

export default useFetch;