import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "./noteServices";

const initialState = {
    isLoading:false,
    isSuccess:false,
    notes: [],
    isError:false,
    message:''
}

export const createNote = createAsyncThunk('note/create', async (noteData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await noteService.createNote(noteData, token)
    } catch (error) {
        const message = (error.response && error.response.data && 
        error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const getNotes = createAsyncThunk('note/get', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await noteService.getNote(token)
    } catch (error) {
        const message = (error.response && error.response.data && 
        error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const noteSlice = createSlice({
    name:'note',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createNote.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(createNote.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.notes.push(action.payload)
        })
        .addCase(createNote.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})


export const { reset } = noteSlice.actions
export default noteSlice.reducer

