import {useState,useEffect} from 'react'
import { fetchSingleProduct } from './data/ProductData'
import { useParams } from 'react-router-dom';

export const SingleProduct = () => {
  const [product, setProduct] = useState({})
  //fetcha 1 st
  let { id } = useParams();

  useEffect(() =>{
    const fetchData = async()=>{
      const result = await fetchSingleProduct(id)
      setProduct(result)
    }
    fetchData()
  }, []) // [] = en gång när sidan laddas



  return (
    <>
    <h1>{product.title}</h1>
    <div className="productgallery_card">
        <div className="productgallery_card_container">
            <img src={product.image} alt="Image for product" className="hero-image"/>
            <div className="information">

                <div className="store">{product.category}</div>

                <a href="#" className="storebutton">Purchase Product</a>

            </div>
        </div>
    </div>
    </>
  )

}

