import { apiClient } from "../ApiClient"



export const getDepartment = ()=>{
    return apiClient.get('/api/department/get')
}