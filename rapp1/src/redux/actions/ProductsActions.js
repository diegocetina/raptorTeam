import * as actionTypes from "../constants/ProductConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})
        const {data} = await axios.get(`/api/ListaProductos`);

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message: error.message
        });
    }
};

export const removeProducts = () => (dispatch) => {
    dispatch({
        type:actionTypes.GET_PRODUCT_RESET,
       
    })
}