import { ordered as cakeOrdered } from '../cake/cakeSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    numOfIcecreams: number
}

const initialState: InitialState = {
    numOfIcecreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--;
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIcecreams += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--;
        })
    }
})

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;