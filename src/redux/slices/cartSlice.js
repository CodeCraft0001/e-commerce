import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartlist : []
    },
    reducers :{
        addToCart : (state,action)=> {
            const existingProduct = state.cartlist.find(item => item.id === action.payload.id)

           if(existingProduct){
            existingProduct.quantity += action.payload.quantity
            // toast.success('QUantity Updated')
           }
           else{ 
            state.cartlist.push({...action.payload, quantity:action.payload.quantity})
            toast.success('Added to cart')
             }
             console.log(state.cartlist,"cart");
        //    alert("Item Added To Cart !")  
        
        },
        removeFromCart : (state,action)=> {
            state.cartlist = state.cartlist.filter(item =>item.id !=action.payload)
            // alert("Item Removed From Cart !!!")
            toast.success('Removed From Cart')
        },
        emptyCart : (state)=> {
            state.cartlist = []
            toast.success("Cart Checkout !!")
        },
        decreaseQty : (state, action)=> {
            const existingProduct = state.cartlist.find(item => item.id === action.payload.id)
            if(existingProduct.quantity == 1)
            {
                state.cartlist = state.cartlist.filter(item=>item.id !=action.payload.id)
                toast.success('Removed !')
            }
            else
            {
               existingProduct.quantity--
            //    toast.success('Decreased')
            }
          
        },
        updateQuantity : (state, action)=> {
            const {id, newQty} = action.payload //Get id and updated Quantity
            const existingProduct = state.cartlist.find(item=> item.id === id)
            //1
            
            if(existingProduct)
            {
                existingProduct.quantity = newQty //Update Quantity
                toast.promise('Qty Increased')
            } 
            
        }
          
    }
})
//2 goto Home.jsx
export const {addToCart, removeFromCart, emptyCart, decreaseQty, updateQuantity } = cartSlice.actions
export default cartSlice.reducer