import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'LOGIN',
    initialState: {
        // El status para saber si esta o no autenticada || checking
        status: 'not-authenticated',
        events:[],
        user: {},
        errorMessage: undefined
    },
    reducers:{
        onChecking: state => {
            state.status = 'checking'
            state.user = {}
            state.errorMessage = undefined
        },
        onLogin: (state,{payload}) => {
            state.status = 'authenticated'
            state.user = payload
            state.errorMessage = undefined
        },
        onLogout: (state,{payload}) => {
            state.status = 'not-authenticated'
            state.user = {}
            state.events = []
            state.errorMessage = payload
        },
        onClearError: state => {
            state.errorMessage = undefined
        },

        // Cargar eventos de la base de datos
        onLoadEvents : (state, {payload = []}) => {
            // state.events = payload
            payload.forEach(event => {
                const exist = state.events.some(dbEvent => dbEvent._id === event._id)
                if(!exist){
                  state.events.push(event)
                }
            })
       },
    }
})

export const {onChecking,onLogin,onLogout,onClearError,onLoadEvents} = loginSlice.actions