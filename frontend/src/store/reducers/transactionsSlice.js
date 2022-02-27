import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firestore';

const initialState = {
    records : [],
    status: 'idle',
    error: null
}


export const setDeposits =  createAsyncThunk('deposits/setDeposits', async() => {
    const temp = []

    const querySnapshot = await getDocs(collection(db, "/transactions/deposits/deposits"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id}`);
            const data = doc.data()
            //console.log(JSON.stringify(data))
            //console.log(data)
           temp.push(data)
            //setDeposits(data)
        });

    return temp
})

const transactionsSlice = createSlice({
    name: 'deposits',
    initialState,
    reducers: {},
    extraReducers: {
        [setDeposits.pending]: (state, action) => {
            state.status = 'loading'
        },
        [setDeposits.fulfilled]: (state, action) => {
            console.log('action is', action)
            
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.records = state.records.concat(action.payload)
        },
        [setDeposits.rejected]: (state, action) => {
            console.log(action)
    
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})


export default transactionsSlice.reducer
