import { useDispatch, useSelector } from "react-redux";

export const useLoginStore = () => {

    // Seleccionar los datos del state
    const {status,user,errorMessage} = useSelector(state => state.login)
    const dispatch = useDispatch()


    return {
        // Propiedades
        status,
        user,
        errorMessage
    }

}