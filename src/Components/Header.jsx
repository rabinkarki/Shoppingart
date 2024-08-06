import React, { useState } from "react";
import {BsCartFill} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart} from '../Store/slices/cartSlice';

function Header() {
    const {cartItems} =useSelector((state)=>state.cart);
    const dispatch=useDispatch();
    const handleToggle=(open)=>{
        dispatch(toggleCart(open));
    }
    const cartQuantity=cartItems.length;
    
    return (
        <header className="w-full h-full p-5 text-2xl  text-gray-100 font-semibold text-end flex justify-between bg-fuchsia-900">
            <div className="h-full ">Redux Shopping Cart</div>
            <div className="h-full flex ">
              <div onClick={()=>handleToggle(true)}>
              <BsCartFill />
              {cartQuantity} 
              </div>
             
            </div>
        </header>
    );
}

export default Header;
