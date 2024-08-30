import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// might need more imports:
// Import the configureStore() function from the @reduxjs/toolkit package.
// Import the reducer function(s) from the CartSlice.jsx file.



// Configure the store:
// Use the configureStore() function to set up the Redux store.
// Pass an object with configuration options to configureStore()
// Specify the reducer(s) using the reducer key in the configuration object. 
// You should associate each reducer with a key representing the slice of the state it manages.


 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});



export default store // might ned an ; afterwards