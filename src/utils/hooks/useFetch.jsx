import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (endpoint, initial) =>{

    const [data, setData]= useState(initial)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(()=>{
        setIsLoading(true)
        const getData = axios.get(endpoint)
        getData
            .then(res => setData(res.data))
            .catch((error)=> setErrorMessage(error))
            .finally(()=> setIsLoading(false));
    },[endpoint])

    return {data, isLoading, errorMessage}
}
