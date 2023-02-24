import { useDispatch, useSelector } from "react-redux";
import { onChecking,onLogin,onLogout,onClearError } from "../store/login/loginSlice";

export const useLoginStore = () => {

    // Seleccionar los datos del state
    const {status,user,errorMessage} = useSelector(state => state.login)
    const dispatch = useDispatch()

    const startLogin = async ({email,password}) => {
        // Verificar las credenciales
        dispatch(onChecking())
        console.log(email,password);
        // TODO: Hacer conexion con la base de datos y mandar los datos recibidos
    }

    const startRegistro = async({name,email,password}) => {
        // Verificar las credenciales
        dispatch(onChecking())
        console.log(name,email,password);
        // TODO: Hacer conexion con la base de datos y mandar los datos recibidos
    }

    const startLogout = () => {
        dispatch(onLogout())
    }


    return {
        // Propiedades
        status,
        user,
        errorMessage,
        // Metodos
        startLogin,
        startRegistro,
        startLogout
    }

}