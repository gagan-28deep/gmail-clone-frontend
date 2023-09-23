import React , {useState} from 'react'
import API from "../services/api.js"
const useApi = (urlObj) => {
    const [response , setResponse] = useState(null)
    const [err , setErr] = useState("")
    const [isLoading , setIsLoading] = useState(false)
    const call = async (payload)=>{
        // As this function will be called , and when this func will be called again, it will already have 
        // Response or error, so set back to default for the next call
        setResponse(null)
        setErr("")
        setIsLoading(true)
        try {
            let res =  await API(urlObj , payload)
            setResponse(res?.data)
        } catch (error) {
            setErr(error?.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    return {call , response , err , isLoading}

}

export default useApi