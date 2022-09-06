import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name: "Sundram",
    userInfo: { name: "Sundram" }
}

export const counterSlice = createSlice({

    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        setName: (state, action) => {
            console.log(action.payload);
            state.userInfo.name = action.payload;
        }
    },
})

export const { increment, decrement, incrementByAmount, setName } = counterSlice.actions

export default counterSlice.reducer