import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"

// Store
import { loginSlice } from "./login/loginSlice"

// Creacion del reducer que se mostrara en el storage
export const store = configureStore({
    reducer:{
        login: loginSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})