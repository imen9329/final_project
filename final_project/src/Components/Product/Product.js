import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../Components/Rating/Rating";

const Product = ({ product }) => {
    return (
        <Card
            className="my-3 p-3 rounded"
            style={{
                height: "80vh",
            }}
        >
            <Card.Header>
                <Link
                    to={`/product/${product._id}`}
                    style={{ textDecoration: "none" }}
                >
                    <Card.Title as="h2" style={{ textAlign: "center" }}>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
            </Card.Header>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Img
                        src={product.image}
                        variant="top"
                        className="img-fluid my-2 p-2"
                    />
                </Link>
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
        </Card>
    );
};

export default Product;
