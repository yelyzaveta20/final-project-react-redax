import axios from "axios";

import {baseURL} from "../constans";

const apiService=axios.create({baseURL})
apiService.interceptors.request.use((request)=>{
    request.headers['Authorization']='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWJlZWZmM2YyMzQzZWRiOTRjMjZmNGIyM2E5OTcxMiIsInN1YiI6IjY1ZDhlODkxYjA0NjA1MDE2MzM0NTQwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.39wiiuB1no9t-S14Qj9us4CgeO1Nel6x8ms5LwNxrxo'
    return request
})

export {apiService}