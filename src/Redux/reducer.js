import { GET_PRODUCT_DATA, GET_PRODUCT_FAIL, GET_PRODUCT_REQ, GET_PRODUCT_SORT, GET_PRODUCT_SUCCESS } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false,
    sortedData: []
}

export const Reducer = (state=initState, action)=>{
    // add the switch statement for different actions
    switch(action.type) {
        case GET_PRODUCT_REQ:
            return {
                ...state,
                isLoading:true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading:false
            }
        case GET_PRODUCT_DATA:
            return {
                ...state,
                products:action.payload,
                isLoading:false
            }
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                isError:true
            }
        case GET_PRODUCT_SORT:
            return{
                ...state,
                products: action.payload,
                isLoading:false
            }
        default:
            return state
    }
}