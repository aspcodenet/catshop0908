import React from 'react'

import {useState,useEffect} from 'react'
import { fetchProducts } from './data/ProductData' 
import { Product } from './Product'

// ta arrayen loopa den 
// for varje skapa en <Product - komponent

export const Products = () => {
  const [products, setProducts] = useState([])


   // BORDE VARA SÅ !!!!
  // useEffect(() =>{
  //     const result = await fetchProducts()
  //     setProducts(result)
  // }, []) // [] = en gång när asidan laddas


  // SÅ HÄR KAN NI GÖRA
  // const fetchData = async()=>{
  //   const result = await fetchProducts()
  //   setProducts(result)
  // }
  // useEffect(() =>{
  //   fetchData()
  // }, []) // [] = en gång när asidan laddas



  // SÅ HÄR KAN BRUKAR MAN GÖRA
  useEffect(() =>{
    const fetchData = async()=>{
      const result = await fetchProducts()
      setProducts(result)
    }
    fetchData()
  }, []) // [] = en gång när asidan laddas


  return (
<section className="products" id="products">
            <h1 className="heading"> <span>our</span> products </h1>
        
            <div className="productgallery">
                {
                  // foreach i products - <Product product=
                  products.map( (theProduct,i) => <Product key={i} product={theProduct}></Product>   )
                }
            </div>
        
        </section>  )
}