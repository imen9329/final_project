import React, { useState } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../Redux/Actions/userActions";
const Register = ({ history }) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register(user, history));
    };

    return (
        <div>
            <div className="registration-form">
                <form onSubmit={handleRegister}>
                    <div className="form-icon">
                        <span>
                            <i className="icon icon-user" />
                        </span>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="username"
                            placeholder="Username"
                            name="name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="address"
                            placeholder="Address"
                            name="address"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="phone-number"
                            placeholder="Phone Number"
                            name="phone"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control item"
                            id="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="radio"
                            name="role"
                            value="user"
                            label="user"
                            onChange={handleChange}
                        />{" "}
                        <span>user</span>
                        <br />
                        <input
                            type="radio"
                            name="role"
                            value="provider"
                            label="provider"
                            onChange={handleChange}
                        />{" "}
                        <span>provider</span>
                    </div>
                    <div className="form-group">
                        <button
                            type="button"
                            className="btn btn-block create-account"
                            onClick={handleRegister}
                        >
                            Create Account
                        </button>
                        <Link
                            to="./login"
                            className="btn btn-outline-grey btn-sm btn-block"
                        >
                            Already have an account
                        </Link>
                    </div>
                </form>
                <div className="social-media">
                    <h5>Sign up with social media</h5>
                    <div className="social-icons">
                        <a href="#">
                            <i
                                className="icon-social-facebook"
                                title="Facebook"
                            />
                        </a>
                        <a href="#">
                            <i className="icon-social-google" title="Google" />
                        </a>
                        <a href="#">
                            <i
                                className="icon-social-twitter"
                                title="Twitter"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
