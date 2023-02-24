import LoginPage from "../page/loginPage";
import MenuPage from "../page/menuPage";

// Librerias
import { Route, Routes, Navigate } from "react-router-dom";

// Hooks
import { useEffect } from "react";
import { useLoginStore } from "../hooks/useLoginStore";

const RouterApp = () =>{ 

    // TODO: Conocer el estado de sesion
    const {status} = useLoginStore()
    // TODO: Saber si existe un token vigente
    useEffect(() => {

    },[])

    if(status === 'checking'){
        return(
            <h3>Cargando...</h3>
        )
    }


    return(
        <Routes>

            {
                (status === 'not-authenticated')
                ? (
                    <>
                        <Route path='/auth/*' element= {<LoginPage/>} />
                        <Route path='/*' element= {<Navigate to='/auth/login' />} />
                    </>
                ) 
                : (
                    <>
                        <Route path='/' element={ <MenuPage/> } />
                        <Route path='/*' element={ <Navigate to='/'/> } />
                    </>
                )
            }

        </Routes>
    )

}

export default RouterApp