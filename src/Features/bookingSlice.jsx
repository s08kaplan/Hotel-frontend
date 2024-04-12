import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    booking:[],
    loading: false,
    error: false
}

export const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers: {

    }
})

export const { } = bookingSlice.actions

export default bookingSlice.reducer