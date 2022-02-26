import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../Firestore';

const initialState = {
    records : [],
    status: 'idle',
    error: null
}


export const setUsers =  createAsyncThunk('users/setUsers', async() => {
    const temp = []

    const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id}`);
            const data = doc.data()
            //console.log(JSON.stringify(data))
            //console.log(data)
           temp.push(data)
            //setRecords(data)
        });

    return temp
})

const notesSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [setUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [setUsers.fulfilled]: (state, action) => {
            console.log('action is', action)
            
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.records = state.records.concat(action.payload)
        },
        [setUsers.rejected]: (state, action) => {
            console.log(action)
    
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})


export default notesSlice.reducer

//export const selectAllNotes = state => state.notes