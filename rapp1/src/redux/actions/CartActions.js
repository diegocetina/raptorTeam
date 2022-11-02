import * as actionTypes from "../constants/CartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async(dispatch, getState) =>{
    const { data } = await axios.get(`/api/ListaProducts/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product : data.id,
            nombre: data.nombre,
            descripcion : data.descripcion,
            valor: data.valor,
            stock:data.stock,
            imagenURL:data.imagenURL,
            qty
        },
    });
    localStorage.setItem("carrito", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem("carrito", JSON.stringify(getState().cart.cartItems))
}