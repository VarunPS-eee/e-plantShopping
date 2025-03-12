import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import { useState } from 'react';


 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
