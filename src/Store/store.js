import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import cartReducer from './slices/cartSlice'

 const store =configureStore(
    {
        reducer:{
            cart:cartReducer
        }
 

})
export default store;
