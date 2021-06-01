import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../Redux/Actions/productActions";
import "./ProductDetails.css";

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productList.product);
    useEffect(() => {
        // dispatch(listProductDetails(match.params.id));
    }, []);

    return (
        <div>
            <div className="container py-4 my-4 mx-auto d-flex flex-column">
                <div className="header">
                    <div className="row r1">
                        <div className="col-md-9 abc">
                            <h1>{product && product.name}</h1>
                        </div>
                        <div className="col-md-3 text-right pqr">
                            {product && product.rating}
                        </div>
                        <p className="text-right para">{`Based on ${
                            product && product.numReviews
                        } Review`}</p>
                    </div>
                </div>
                <div className="container-body mt-4">
                    <div className="row r3">
                        <div className="col-md-5 p-0 klo">
                            <ul></ul>
                        </div>
                        <div className="col-md-7">
                            <img
                                src={product && product.image}
                                width="90%"
                                height="95%"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer d-flex flex-column mt-5">
                    <div className="row r4">
                        <div className="col-md-2 myt des">
                            <a href="#">Description</a>
                        </div>
                        <div className="col-md-2 myt ">
                            <a href="#">Review</a>
                        </div>
                        <div className="col-md-2 mio offset-md-4">
                            <a href="#">ADD TO CART</a>
                        </div>
                        <div className="col-md-2 myt ">
                            <button
                                type="button"
                                className="btn btn-outline-warning"
                            >
                                <a href="#">BUY NOW</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
