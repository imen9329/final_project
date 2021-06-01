import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { logout } from "../../Redux/Actions/userActions";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>Choco Bar</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to="/cart">
                                    <Nav.Link>
                                        <i className="fas fa-shopping-cart"></i>{" "}
                                        Cart
                                    </Nav.Link>
                                </LinkContainer>
                                {isAuth ? (
                                    <LinkContainer
                                        to="/"
                                        onClick={() => dispatch(logout())}
                                    >
                                        <Nav.Link>
                                            <i className="fas fa-sign-out-alt "></i>
                                            Log out
                                        </Nav.Link>
                                    </LinkContainer>
                                ) : (
                                    <>
                                        <LinkContainer to="/register">
                                            <Nav.Link>
                                                <i className="fas fa-user"></i>{" "}
                                                Sign Up
                                            </Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/login">
                                            <Nav.Link>
                                                <i className="fas fa-user"></i>{" "}
                                                Sign In
                                            </Nav.Link>
                                        </LinkContainer>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
};

export default Header;
