import { useDispatch, useSelector } from "react-redux";
import loginApi from "../api/loginApi";
import { onChecking,onLogin,onLogout,onClearError } from "../store/login/loginSlice";

export const useLoginStore = () => {

    // Seleccionar los datos del state
    const {status,user,errorMessage} = useSelector(state => state.login)
    const dispatch = useDispatch()

    const startLogin = async ({email,password}) => {
        // Verificar las credenciales
        dispatch(onChecking())
        // console.log(email,password);
        // TODO: Hacer conexion con la base de datos y mandar los datos recibidos
        try {
            const {data} = await loginApi.post('/',{email,password})
            localStorage.setItem('token', data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            dispatch(onLogout('Datos erroneos'))
            setTimeout(() => {
                // Limpiar mensaje de error
                dispatch(onClearError())
            }, 10)
        }
    }

    const startRegistro = async({name,email,password}) => {
        // Verificar las credenciales
        dispatch(onChecking())
        console.log(name,email,password);
        // TODO: Hacer conexion con la base de datos y mandar los datos recibidos
        try {
            const {data} = await loginApi.post('/new',{name,email,password})
            localStorage.setItem('token',data.token)
            dispatch(onLogin({name:data.name, uid: data.uid}))
        } catch (error) {

            dispatch(onLogout(error.response.data?.msg || 'Todos los datos son importantes'))
            setTimeout(() => {
                dispatch(onClearError())
            },10)
        }
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