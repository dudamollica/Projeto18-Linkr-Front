import axios from "axios"

const url = process.env.REACT_APP_API_URL;

function config(token){
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function postPublish(body, token){
    const promisse = axios.post(`${url}/timeline`, body, config(token))
    return promisse
}

const api = {
    postPublish,
}

export default api;