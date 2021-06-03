import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import LandPage from "./Pages/LandPage/LandPage";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Login from "./Pages/Login/Login";
import Errors from "./Pages/Errors/Errors";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import PrivateRoute from "./router/PrivateRoute";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import { current } from "./Redux/Actions/userActions";
import { listProducts } from "./Redux/Actions/productActions";
import Review from "./Components/Review/ReviewCard";
import CheckOut from "./Pages/CheckOut/CheckOut";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
        dispatch(listProducts());
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={LandPage} />
                <Route path="/productDetails/:id" component={ProductDetails} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                <Route path="/cart" component={Cart} />
                <Route path="/reviews/:id" component={Review} />
                <Route path="/checkout" component={CheckOut} />

                <Route path="/*" component={Errors} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
