import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { productList, productAddReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
const rootReducer = combineReducers({
    userReducer,
    productList,
    cartReducer,
    productAddReducer,
});
export default rootReducer;
