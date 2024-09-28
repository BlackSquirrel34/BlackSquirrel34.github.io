import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // adds a new plant to the items array initialized above
    // addItem() should get called when the user selects "Add to cart". subsequently, handleAddToCart() get called,
    // which has the plant type as parameter
    // handleAddToCart() will then dispatch the plant details to the additem() reduser
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // removes item from cart based on its name
    // state.items = state.items.filter(item => item.name !== action.payload);
    // additional lines by me
    removeItem: (state, action) => {
      // extract name for filtering
      const { name } = action.payload;
      // update the state
      state.items = state.items.filter(item => item.name !== name);
    },

    // first extracts the items's name amd amount from the action.payload. 
    // then looks for the item in the state.items array with matching name
    // if found, quantity is updated to amount in payload
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },


  },

});


//  Export the action creators, addItem() to use in ProductList.jsx, removeItem(), and updateQuantity(), to use in the CartItem.jsx.
// Also export the reducer as the default to use in store.js.

export const { addItem, removeItem, updateQuantity } = CartSlice.actions; // used in ProductList.jsx and CartItem.jsx

export default CartSlice.reducer; // used in store.js
