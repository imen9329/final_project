import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../../Components/Product/Product";
import { listProducts } from "../../Redux/Actions/productActions";
import Loading from "../Loading";

const ProductList = ({ searchItem }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, []);
    const products = useSelector((state) => state.productList.products);
    const loading = useSelector((state) => state.productList.loading);

    return loading ? (
        <Loading />
    ) : (
        <h1>
            <h1 style={{ textAlign: "center" }}>Our Products</h1>
            <Row>
                {products &&
                    products
                        .filter((val) =>
                            val.name
                                .toLowerCase()
                                .includes(searchItem.toLowerCase())
                        )
                        .map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
            </Row>
        </h1>
    );
};

export default ProductList;
