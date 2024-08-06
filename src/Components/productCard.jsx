import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../Store/slices/cartSlice'

function productCard(props) {
    const {img,rating,title,price}=props;
    
    const [Added,setAdded]=useState(false);
    const dispatch= useDispatch();
    const handleAddcart=()=>{
        const items={...props};

        dispatch(addItem(items));
        setAdded(true);
        setTimeout(()=>{
            setAdded(false)
        },3000)
    }
  return (
    <div className="flex-1 min-w-[260px] h-auto box-border border-2 rounded-sm p-5 text-center shadow-md">
  <figure className="border-2 rounded-sm flex justify-center">
    <img src={img} className="max-h-40 w-full object-contain" alt="no image" />
  </figure>
  <div className="text-primary text-sm mt-2">
    {rating}
  </div>
  <h3 className="text-lg mt-2">
    {title}
  </h3>
  <div className="font-bold mt-2">
    ₹ {price.toLocaleString()}
  </div>
  <div className="mt-4">
    <button
      type="button"
      className={`w-full bg-fuchsia-900 text-gray-200 py-2 text-lg transition-all duration-200 ease-in-out ${Added ? 'bg-slate-500 text-white' : ''}`}
      onClick={handleAddcart}
    >
      {Added ? 'Added' : 'Add to cart'}
    </button>
  </div>
</div>


  )
}

export default productCard