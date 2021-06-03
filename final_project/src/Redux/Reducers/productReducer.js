import {
    PRODUCT_LIST_LOAD,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
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
const initialState = {
    products: [],
    errors: [],
    loading: false,
    review: [],
};

export const productList = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_LIST_LOAD:
            return { ...state, loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: payload };
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, errors: payload };
        case PRODUCT_DETAILS_LOAD:
            return { loading: true, ...state };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: payload, ...state };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: payload, ...state };
        default:
            return state;
    }
};

export const productAddReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_ADD_LOAD:
            return { loading: true, ...state };
        case PRODUCT_ADD_SUCCESS:
            return { loading: false, product: payload, ...state };
        case PRODUCT_ADD_FAIL:
            return { loading: false, error: payload, ...state };

        default:
            return state;
    }
};

export const productReviewReducer = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case PRODUCT_RATE_LOAD:
            return { loading: true, ...state };
        case PRODUCT_RATE_SUCCESS:
            return { loading: false, review: payload, ...state };
        case PRODUCT_RATE_FAIL:
            return { loading: false, error: payload, ...state };

        default:
            return state;
    }
};
