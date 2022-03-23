import { GET_PRODUCT_DATA, GET_PRODUCT_FAIL, GET_PRODUCT_REQ, GET_PRODUCT_SORT, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios"
// action for get products request
export const getProductsReq = () => ({
    type:GET_PRODUCT_REQ
});

// action for get products success

export const getProductsSuccess = () => ({
    type:GET_PRODUCT_SUCCESS
});

// action for get products failure

export const getProductsFailure = () => ({
    type:GET_PRODUCT_FAIL
});

// thunk call to fetch products  list
export const getproductsData = (payload) => {
return async(dispatch) => {
    dispatch(getProductsReq())
    try {
        const response = await axios.get("https://movie-fake-server.herokuapp.com/products")
        dispatch({type:GET_PRODUCT_DATA, payload: response.data})
        dispatch(getProductsSuccess())
    } catch (error) {
        dispatch(getProductsFailure())
    }
}
};

// action object for sort  feature

export const sortProducts = (order) => {
    return async(dispatch) => {
        dispatch(getProductsReq())

        try {
            const response = await axios.get("https://movie-fake-server.herokuapp.com/products")
            if(order == "asc"){
                const sorted = response.data.sort((a,b) => a.price - b.price)
                console.log(order,sorted)
                dispatch({type: GET_PRODUCT_SORT, payload: sorted})
                dispatch(getProductsSuccess())
            }else{
                const sorted = response.data.sort((a,b) => b.price - a.price)
                console.log(order,sorted)
                dispatch({type: GET_PRODUCT_SORT, payload: sorted})
                dispatch(getProductsSuccess())
            }
        } catch (error) {
            dispatch(getProductsFailure())
        }
    }
};
