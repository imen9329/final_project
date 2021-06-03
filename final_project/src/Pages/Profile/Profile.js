import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../Components/Dashboard/Dashboard";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ModalEdit from "../../Components/Modal/Modal";

import "./Profile.css";

const Profile = ({ history }) => {
    const user = useSelector((state) => state.userReducer.user);
    const role = useSelector((state) => state.userReducer.user.role);
    const products = useSelector((state) => state.productList.products);
    return (
        <div>
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto">
                    {/* Profile widget */}
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 cover">
                            <div className="media align-items-end profile-head">
                                <div className="profile mr-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                        alt="..."
                                        width={130}
                                        className="rounded mb-2 img-thumbnail"
                                    />
                                    <div>
                                        <ModalEdit />
                                    </div>
                                </div>

                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">
                                        {user && user.name}
                                    </h4>
                                    <p className="small mb-4">
                                        <i className="fas fa-map-marker-alt mr-2" />
                                        {user && user.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light p-4 d-flex justify-content-end text-center"></div>
                        <div className="px-4 py-3">
                            <h5 className="mb-0">About</h5>
                            <div className="p-4 rounded shadow-sm bg-light">
                                <p className="font-italic mb-0">
                                    Address : {user.address}
                                </p>
                                <p className="font-italic mb-0">
                                    Phone number : {user.phone}
                                </p>
                                <p className="font-italic mb-0">{role}</p>
                            </div>
                        </div>
                        <div className="py-4 px-4">
                            {role === "provider" ? (
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h5 className="mb-0">Recent products</h5>
                                    <div>
                                        <AddProduct history={history} />
                                    </div>
                                </div>
                            ) : null}
                            <div className="py-4 px-4">
                                {role === "admin" ? (
                                    <div>
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h5 className="mb-0">
                                                Admin dashboard
                                            </h5>
                                            <div>
                                                <Dashboard />
                                            </div>
                                        </div>{" "}
                                    </div>
                                ) : null}
                            </div>

                            <div className="row">
                                {products &&
                                    products.map((el) => (
                                        <div className="col-lg-6 mb-2 pr-lg-1">
                                            <img
                                                src={el.image}
                                                alt={el.name}
                                                className="img-fluid rounded shadow-sm"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
