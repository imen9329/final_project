import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Redux/Actions/userActions";

const ModalEdit = () => {
    const user = useSelector((state) => state.userReducer.user);
    // const [editUser, setEditUser] = useState({});
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    // const handleChange = (e) => {
    //     setEditUser({ ...editUser, [e.target.name]: e.target.value });
    // };
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(update(user._id, { name, address, phone }));
        handleClose();
    };

    return (
        <>
            <Button variant="light" onClick={handleShow}>
                Edit Profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="name"
                        type="text"
                        placeholder="new name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="address"
                        type="text"
                        placeholder="new address"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Body>
                    <input
                        className="form-control shadow-none"
                        name="phone"
                        type="text"
                        placeholder="new phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEdit;
