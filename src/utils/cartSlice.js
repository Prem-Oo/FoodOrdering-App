import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem)
                existingItem.quantity+=1;
            else
            state.items.push({...action.payload,quantity:1});
        },
        clearCart: (state) => {
            state.items.length = 0   // or  return {items:[]};
        },
        removeItem:(state,action)=>{
            const existingItem = state.items.find(item => item.id === action.payload.id);
             if (existingItem) { 
                if (existingItem.quantity > 1) {
                     existingItem.quantity -= 1; 
                } else {
                     state.items = state.items.filter(item => item.id !== action.payload.id);
                     }
             }
        }
    }
})

export const { addItem, clearCart,removeItem } = cartSlice.actions;
export default cartSlice.reducer;