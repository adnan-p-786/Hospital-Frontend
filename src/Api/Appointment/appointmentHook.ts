import { useMutation } from "react-query"
import { postAppointment } from "./appointmentApi"

export const useCreateAppointment = () => {
    return useMutation((data: any) => postAppointment(data))
}


