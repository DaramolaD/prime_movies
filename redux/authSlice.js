import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: null
}

// redux have a centralized store
// this store is composed of slices (authslice and others....)

export const authslice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        register(state, action) {
            state.user = action.payload.others
            state.token = action.payload.token
        },
        logout(state) {
            state.user = null
            state.token = null
            localStorage.clear()
        }
    }
})


export const {login, register, logout} = authslice.actions

export default authslice.reducer