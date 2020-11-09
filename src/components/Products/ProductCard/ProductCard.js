import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div><h5>Product name: {props.product.product_name}</h5></div>
            </div>
            <div>
                <p className='product-rating'>
                    Product rating: {props.product.product_rating}
                </p>
            </div>
            <div>
                <button className='deleteBtn' onClick={props.deleteProduct}>Delete product</button>
            </div>
        </div>
    )
}

export default ProductCard
