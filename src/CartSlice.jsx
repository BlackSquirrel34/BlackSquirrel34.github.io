import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Todo:
    // not sure about this one
    removeItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const hasItem = state.items.filter(item => item.name !== action.payload);
      if (hasItem) {
        hasItem.quantity--;
      } else {
       
      }
    },


    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },


  },

});


// Todo:
//  Export the action creators, addItem() to use in ProductList.jsx, removeItem(), and updateQuantity(), to use in the CartItem.jsx.
   // Also export the reducer as the default to use in store.js.

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
