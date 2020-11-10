import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Products.module.css';
import LoginButton from '../LoginButton/LoginButton';
import Loading from '../Shared/Loading/Loading';
import MessageBox from '../Shared/MessageBox/MessageBox';
import ProductCard from './ProductCard/ProductCard';
import { fetchProduct } from '../../store/productActions';
import axios from 'axios';
import backendUrl from '../../services/backendUrl';

const Products = () => {
    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    const { loading, products, error } = productList;

    useEffect(() => {
            dispatch(fetchProduct());
    }, [dispatch])

    const [post, setPost] = useState({ productName: '', productRating: '' })
    const postProduct = () => {
        if (post.productName === '') {
            alert('Please name you product')
            return
        }
        if (post.productRating === '') {
            alert('Please rate this product')
            return
        }
        return axios.post(`${backendUrl}/api/products`, post)
            .then(response => {
                dispatch(fetchProduct())
                return response
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteProduct = (productId) => {
        return axios.delete(`${backendUrl}/api/products/${productId}`)
            .then(response => {
                dispatch(fetchProduct());
                return response;
            })
            .catch(error => {
                return error
            })
    }

    let isAuth;
    if (!isAuthenticated) {
        isAuth = (
            <div className={classes.container}>
                <div>
                    <h1>
                        Please log in to view the products
                    </h1>
                </div>
                <div>
                    <LoginButton />
                </div>
            </div>
        )
    } else if (isAuthenticated) {
        isAuth = (
            <div className={classes.container}>
                <h3>
                    Products fetched from database
                </h3>
                <div className={classes.productWrapper}>
                    {loading 
                        ? <Loading>Loading</Loading>
                        : error ? <MessageBox>{error}</MessageBox>
                            : products.map(product => (
                                <ProductCard
                                    product={product}
                                    key={product.product_id}
                                    deleteProduct={() => deleteProduct(product.product_id)} />
                            ))
                    }
                </div>
                <div className={classes.postProductWrapper}>
                    <h3>
                        Post new product and rate it
                    </h3>
                    <input maxLength='25' value={post.productName} onChange={e => setPost({ productName: e.target.value, productRating: post.productRating })} />
                    <select value={post.productRating} onChange={e => setPost({ productName: post.productName, productRating: e.target.value })} >
                        <option></option>
                        {
                            [...Array(5).keys()].map(nr => (
                                <option key={nr + 1} value={nr + 1}>{nr + 1}</option>
                            ))
                        }
                    </select>
                    <button className={classes.sendBtn} onClick={postProduct}>Post Product</button>
                </div>
            </div>
        )
    }


    return (
        // <>
        //     {isAuth}
        // </>
        <div className={classes.container}>
        <h3>
            Products fetched from database
        </h3>
        <div className={classes.productWrapper}>
            {loading 
                ? <Loading>Loading</Loading>
                : error ? <MessageBox>{error}</MessageBox>
                    : products.map(product => (
                        <ProductCard
                            product={product}
                            key={product.product_id}
                            deleteProduct={() => deleteProduct(product.product_id)} />
                    ))
            }
        </div>
        <div className={classes.postProductWrapper}>
            <h3>
                Post new product and rate it
            </h3>
            <input maxLength='25' value={post.productName} onChange={e => setPost({ productName: e.target.value, productRating: post.productRating })} />
            <select value={post.productRating} onChange={e => setPost({ productName: post.productName, productRating: e.target.value })} >
                <option></option>
                {
                    [...Array(5).keys()].map(nr => (
                        <option key={nr + 1} value={nr + 1}>{nr + 1}</option>
                    ))
                }
            </select>
            <button className={classes.sendBtn} onClick={postProduct}>Post Product</button>
        </div>
    </div>
    )
}

export default Products
