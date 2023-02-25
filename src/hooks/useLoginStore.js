import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginApi from "../api/loginApi";
import { onChecking,onLogin,onLogout,onClearError,onLoadEvents } from "../store/login/loginSlice";


export const useLoginStore = () => {

    // Seleccionar los datos del state
    const {events,status,user,errorMessage} = useSelector(state => state.login)
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

    // saber si hay un token para darle uno nuevo y reingresar al usuario
    const checkAuthToken = async () =>{
        const token = localStorage.getItem('token')
        if(!token) return dispatch(onLogout())

        try {
            const {data} = await loginApi.get('/renew')
            localStorage.setItem('token', data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))
        } catch (error) {
            // Limpiart localStorage
            localStorage.clear()
            dispatch(onLogout())
        }

    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogout())
    }

    // Obtener Los datos de los usuarios
    const showValues = async () => {
        try {
            const {data} = await loginApi.get('/')
            dispatch(onLoadEvents(data.msg))
        } catch (error) {
            
        }
    }


    return {
        // Propiedades
        events,
        status,
        user,
        errorMessage,
        // Metodos
        startLogin,
        startRegistro,
        startLogout,
        checkAuthToken,
        showValues
    }

}