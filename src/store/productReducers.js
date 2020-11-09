import * as actionType from './actionTypes';

export const productReducer = (state = {loading: true, products: []}, action) => {
    switch(action.type) {
        case actionType.PRODUCT_LIST_REQUEST:
            return {loading: true}
        case actionType.PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload}
        case actionType.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        case actionType.PRODUCT_POST_REQUEST:
            return {loading: true}
        case actionType.PRODUCT_POST_SUCCESS:
            return {loading: false, postedProduct: action.payload}
        case actionType.PRODUCT_POST_FAIL:
            return {loading: false, postError: action.payload}
        default:
            return state
    }
}

// export const postProductReducer = (state = {loading: true, product: {}}, action) => {
//     switch(action.type) {
//         case actionType.PRODUCT_POST_REQUEST:
//             return {loading: true}
//         case actionType.PRODUCT_POST_SUCCESS:
//             return {loading: false, postedProduct: action.payload}
//         case actionType.PRODUCT_POST_FAIL:
//             return {loading: false, postError: action.payload}
//         default:
//             return state
//     }
// }