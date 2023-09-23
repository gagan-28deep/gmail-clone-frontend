import axios from "axios";

const API_URL = "http://localhost:3000"


// We want to create a middleware , this function will be called from that middleware
// Middleware are important, lets say we want to perform some actions before the API-CALL
// We could see middleware
const API_GMAIL = async (urlObj , payload) =>{

    // This is Axios API
    return await axios({
        method : urlObj?.method,
        url : `${API_URL}/${urlObj?.endpoint}`,
        // In post we give data(payload)
        data : payload
    })
}

export default API_GMAIL