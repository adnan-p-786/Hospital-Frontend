import { apiClient } from "../ApiClient"


export const postAppointment =(data:any)=>{
    return apiClient.post('/api/appointment/post',data)
}


