import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({product}) => {
  return (
    <div className="productgallery_card">
        <div className="productgallery_card_container">
            <img src={product.image} alt="cookies" className="hero-image"/>
            <div className="information">

                <div className="name">{product.title}</div>

                <div className="store">{product.category}</div>

                <Link className="storebutton" to={`/product/${product.id}`} >
                  View more info
                </Link>

            </div>
        </div>
    </div>

  )
}