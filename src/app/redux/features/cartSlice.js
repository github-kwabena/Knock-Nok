import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify";
const initialState ={
    cartItems: localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems")) 
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart( state, action ){

        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
            )
            // console.log(itemIndex)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1;
                toast.info(`Increased ${state.cartItems[itemIndex].ProductName} cart quantity`,{
                    position: "bottom-left"
                })
            } else {
            const tempProduct = {...action.payload, cartQuantity: 1}
            state.cartItems.push(tempProduct);
            toast.success(`${action.payload.ProductName} added to cart` ,{
                position: "bottom-left"
            })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
        },
        decreaseCart(state , action){
           const itemIndex = state.cartItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
           );

           if(state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -=1
            toast.info(`Decreased ${action.payload.ProductName} cart quantity`,{
                position:"bottom-left",
            })
           }else if (state.cartItems[itemIndex].cartQuantity === 1){
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )

            state.cartItems = nextCartItems;
            
            toast.error(`${action.payload.ProductName} removed from cart`,{
                position: "bottom-left",
            })
           }
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotals(state, action){
        let {total,quantity} =  state.cartItems.reduce(
            (cartTotal,cartItem)=>{
                const {ProductPrice, cartQuantity} = cartItem;
                //console.log(ProductPrice)
                const itemTotal = ProductPrice * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },{
                total: 0,
                quantity:0
            })

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        }
    }
})

export const { addToCart , decreaseCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;