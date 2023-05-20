import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import cartReducer, { getTotals } from "../features/cartSlice";



export const store = configureStore({
    reducer:{
        counter: counterReducer,
        cart: cartReducer
    }
})

store.dispatch(getTotals());