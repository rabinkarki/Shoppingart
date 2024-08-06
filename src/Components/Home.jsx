import React from 'react'
import productData from "../data/productData"
import ProductCard from './productCard'

function Home() {
  return (
    <section className="shadow-md w-full h-full ">
    <div className="w-full h-auto p-10 box-border flex flex-wrap gap-5">
      {productData.map((data) => (
        <ProductCard key={data.id} {...data} />
      ))}
    </div>
  </section>
  
  )
}

export default Home