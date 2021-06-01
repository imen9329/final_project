import axios from "axios";
import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_LOAD,
    PRODUCT_DETAILS_LOAD,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_ADD_LOAD,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,
} from "../Constants/product";

export const listProducts = () => async (dispatch) => {
    dispatch({ type: PRODUCT_LIST_LOAD });

    try {
        const result = await axios.get("/api/product");

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: result.data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        });
    }
};

export const listProductDetails = (id) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_LOAD });

    try {
        const { data } = await axios.get(`/api/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.msg,
        });
    }
};

export const productAdd =
    ({ product }) =>
    async (dispatch) => {
        dispatch({ type: PRODUCT_ADD_LOAD });
        try {
            const result = await axios.post("/api/product", product);
            dispatch({ type: PRODUCT_ADD_SUCCESS, payload: result.data });
        } catch (error) {
            dispatch({ type: PRODUCT_ADD_FAIL, payload: error.response.data });
        }
    };
