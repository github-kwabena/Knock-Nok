import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../config/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";
import axios from "axios";
const initialState = {
    products: [],
    status: null
}

export const productsFetch = createAsyncThunk(
    "products/productsfetch",
    async() => {
        const q =  query(collection(db,'Products'));
        const querySnapshot = await axios.get(getDocs(q));
        return querySnapshot?.data;
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{

        
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) =>{
            state.status = "pending"
        },
        [productsFetch.fulfilled]: (state, action) =>{
            state.status = "success"
            state.items = action.payload
        },
        [productsFetch.rejected]: (state, action) =>{
            state.status = "rejected"
        },
    }
})

export default productsSlice.reducer;