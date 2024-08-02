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
    <div className='max-w-180  border-2 rounded-sm ml-5 text-xl p-4   text-center '>
        <figure className='max-w-90  border-2 rounded-'>
      <img src={img} className='max-h-40' alt='no image' />
    </figure>
    <div>
        {rating}
    </div>
    <h3 className=' text-nowrap'>{title}</h3>
    <div>
        {price.toLocaleString()}
    </div>
    <div>
        <button type='submit' onSubmit={handleAddcart}>
            {Added ? "Added":"Add to cart"}
        </button>
    </div>
    </div>

  )
}

export default productCard