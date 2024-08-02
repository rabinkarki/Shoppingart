import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import cartSlice from './slices/cartSlice'

 const store =configureStore(
    {
        reducer:{
            cart:cartSlice
        }
 

})
export default store;
