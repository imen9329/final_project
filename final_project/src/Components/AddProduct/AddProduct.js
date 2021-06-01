import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productAdd } from "../../Redux/Actions/productActions";
const AddProduct = ({ history }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [addProduct, setAddProduct] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setAddProduct({ ...addProduct, [e.target.name]: e.target.value });
    };
    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(productAdd(addProduct, history));
        handleClose();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add your new Choco </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        name="name"
                        type="text"
                        className="form-control shadow-none"
                        placeholder="New product name"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        name="image"
                        type="text"
                        className="form-control shadow-none"
                        placeholder="New product image link"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        name="description"
                        type="text"
                        className="form-control shadow-none"
                        placeholder="New product description"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        name="price"
                        type="number"
                        className="form-control shadow-none"
                        placeholder="New product price"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        name="countInStock"
                        type="number"
                        className="form-control shadow-none"
                        placeholder="Number of items"
                        onChange={handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddProduct}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddProduct;
