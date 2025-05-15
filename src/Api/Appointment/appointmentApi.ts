import { apiClient } from "../ApiClient"


export const postAppointment =(data:any)=>{
    return apiClient.post('/api/appointment/post',data)
}

export const getAppointment = ()=>{
    return apiClient.get('/get')
}
