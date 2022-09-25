import {createSlice} from '@reduxjs/toolkit'

const initialStateCounter = {
    user : 'Syafira',
    counter : 1000
}

const counterRTKSlice = createSlice({
    name : "counterRTK",
    initialState : initialStateCounter,

    reducers : {
        increment(state) {
            state.counter += 1
        },
        decrement(state){
            state.counter -= 1
        },
        kosong(state){
            state.counter = 0
        },
        incrementSpec(state, action){
            state.counter += action.payload
        },
        decrementSpec(state, action){
            state.counter -= action.payload
        }
    }
})

// actionss
export const {increment, decrement, kosong, incrementSpec, decrementSpec} = counterRTKSlice.actions

//selectorr
export const selectUser = (state) => state.counterRTK.user
export const selectCounter = (state) => state.counterRTK.counter

//reducer
export default counterRTKSlice.reducer