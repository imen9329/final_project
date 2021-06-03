import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/cart";

export const addToCart = (id, qty) => async (dispatch) => {
    const { data } = await axios.get(`/api/product/${id}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
        },
    });
    localStorage.setItem("PurchasedItems", JSON.stringify(data));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
    );
};
