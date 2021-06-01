import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../Components/Rating/Rating";
import { useDispatch } from "react-redux";
import { listProductDetails } from "../../Redux/Actions/productActions";
const Product = ({ product }) => {
    const selectedProduct = () => dispatch(listProductDetails(product._id));
    const dispatch = useDispatch();
    return (
        <Card
            onClick={() => selectedProduct()}
            className="my-3 p-3 rounded"
            style={{
                height: "80vh",
            }}
        >
            <Link
                to={`/productDetails/${product._id}`}
                style={{ textDecoration: "none" }}
            >
                <Card.Header>
                    <Card.Title as="h2" style={{ textAlign: "center" }}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Card.Img
                        src={product.image}
                        variant="top"
                        className="img-fluid my-2 p-2"
                    />
                </Card.Body>
                <Card.Footer>
                    <Card.Text
                        as="div"
                        style={{
                            color: "black",
                            fontSize: "22px",
                            textAlign: "center",
                        }}
                    >
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </Card.Text>
                    <Card.Text as="h4" style={{ textAlign: "center" }}>
                        {product.price} TND
                    </Card.Text>
                </Card.Footer>
            </Link>
        </Card>
    );
};

export default Product;
