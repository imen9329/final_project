import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "../../Components/Rating/Rating";
import Review from "../../Components/Review/ReviewCard";
import { listProducts } from "../../Redux/Actions/productActions";
import Cart from "../Cart/Cart";
import "./ProductDetails.css";

const ProductDetails = ({ match, location, history }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    }, []);
    const products = useSelector((state) => state.productList.products);
    const product = products.find((p) => p._id === match.params.id);
    console.log(product);
    useEffect(() => {
        // dispatch(listProductDetails(match.params.id));
    }, []);

    return (
        <div>
            <div className="container py-4 my-4 mx-auto d-flex flex-column">
                <Link className="btn btn-light my-3" to="/">
                    Go Back
                </Link>

                <div className="header">
                    <div className="row r1">
                        <div className="col-md-9 abc">
                            <h1>{product && product.name}</h1>
                        </div>
                        <div className="col-md-3 text-right pqr">
                            <Rating />
                        </div>
                        <p className="text-right para">{`Based on ${
                            product && product.numReviews
                        } Reviews`}</p>
                    </div>
                </div>
                <div className="container-body mt-4">
                    <div className="row r3">
                        <div className="col-md-5 p-0 klo">
                            <ul>
                                <li>
                                    <p>
                                        {" "}
                                        <span style={{ fontWeight: "bold" }}>
                                            Description :
                                        </span>
                                        {product && product.description}
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        {" "}
                                        <span style={{ fontWeight: "bold" }}>
                                            Number of Items :
                                        </span>
                                        {product && product.countInStock}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-7">
                            <img
                                src={product && product.image}
                                width="90%"
                                height="90%"
                            />
                        </div>
                    </div>
                </div>

                <div className="footer d-flex flex-column mt-5">
                    <div className="row-md-7">
                        <Cart
                            match={match}
                            location={location}
                            history={history}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
