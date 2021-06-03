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
    PRODUCT_RATE_LOAD,
    PRODUCT_RATE_SUCCESS,
    PRODUCT_RATE_FAIL,
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

        await dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
        console.log(data);
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

export const productAdd = (product, history) => async (dispatch) => {
    dispatch({ type: PRODUCT_ADD_LOAD });
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const result = await axios.post("/api/product", product);
        dispatch({ type: PRODUCT_ADD_SUCCESS, payload: result.data, config });
        history.push("/");
    } catch (error) {
        dispatch({ type: PRODUCT_ADD_FAIL, payload: error.data });
    }
};

export const productRate = (id, review, history) => async (dispatch) => {
    dispatch({ type: PRODUCT_RATE_LOAD });
    const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    };
    try {
        const result = await axios.post(
            `/api/product/reviews/${id}`,
            review,
            config
        );
        dispatch({ type: PRODUCT_RATE_SUCCESS, payload: result.data });
        history.push("/");
    } catch (error) {
        dispatch({ type: PRODUCT_RATE_FAIL, payload: error.data });
    }
};
