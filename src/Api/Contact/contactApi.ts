import { apiClient } from "../ApiClient"


export const postContact =(data:any)=>{
    return apiClient.post('/api/contact/post',data)
}