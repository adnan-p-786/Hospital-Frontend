import { useMutation } from "react-query"
import { postContact } from "./contactApi"

export const useCreateContact = () => {
    return useMutation((data: any) => postContact(data))
}


