import axios from 'axios';
import * as actionType from './actionTypes';
import backendUrl from '../services/backendUrl';

export const fetchProduct = () => {
    return dispatch => {
        dispatch({
            type: actionType.PRODUCT_LIST_REQUEST
        })
        axios.get(`${backendUrl}/api/products`)
            .then(response => {
                dispatch({
                    type: actionType.PRODUCT_LIST_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: actionType.PRODUCT_LIST_FAIL,
                    payload: error.message
                })
            })
    }
}

export const postProduct = (product) => {
    return dispatch => {
        dispatch({
            type: actionType.PRODUCT_POST_REQUEST
        })
        axios.post(`${backendUrl}/api/products`, {product})
            .then(response => {
                console.log(product)
                dispatch({
                    type: actionType.PRODUCT_POST_SUCCESS,
                    payload: response
                })
            })
            .catch(error => {
                dispatch({
                    type: actionType.PRODUCT_POST_FAIL,
                    payload: error
                })
            })
    }
}
