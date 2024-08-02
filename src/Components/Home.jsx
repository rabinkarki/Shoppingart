import React from 'react'
import productData from "../data/productData"
import ProductCard from './productCard'

function Home() {
  return (
   <section className='flex flex-wrap  max-h-screen  '>
    
   { productData.map((data)=>(
    <ProductCard key={data.id} {...data}/>
    ) )
    }
    
        </section>
  )
}

export default Home