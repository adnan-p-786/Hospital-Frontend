import { apiClient } from "../ApiClient"



export const getDoctor = ()=>{
    return apiClient.get('/api/doctor/get')
}