import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    doctor : []
}

const doctorSlice = createSlice({
    name:"doctor",
    initialState:initialState,
    reducers:{
        setDoctor:(state,action)=>{
            state.doctor.push(action.payload)
        }
    }
})

export const {setDoctor} = doctorSlice.actions
export default doctorSlice.reducer