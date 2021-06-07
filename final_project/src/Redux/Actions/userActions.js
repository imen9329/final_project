import axios from "axios";
import {
    LOAD_USER,
    REGISTER_USER,
    FAIL_USER,
    LOGIN_USER,
    CURRENT_USER,
    LOGOUT_USER,
    UPDATE_USER,
} from "../Constants/user";

export const register = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", user);
        dispatch({ type: REGISTER_USER, payload: result.data });

        history.push("/profile");
    } catch (error) {
        error.response.data.errors.map((el) => alert(el.msg));
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};

export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        // console.log("result", result);
        dispatch({ type: LOGIN_USER, payload: result.data });

        history.push("/profile");
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("/api/user/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.response.data });
    }
};
// update user

export const update = (id, user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.put(`/api/user/${id}`, user);
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error.data });
    }
};

// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};

export const videErrors = () => {
    return {
        type: "VIDE_ERRORS",
    };
};
