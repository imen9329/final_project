import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckOut = () => {
    return (
        <div>
            <Container p={10} style={{ textAlign: "center" }}>
                <Col>
                    <span>
                        Your commande is sent to provider Successfully!!!
                    </span>
                    <br />
                    <span>
                        You will get response as soon as possible with delivery
                        informations
                    </span>
                    <br />
                    <span>Thank you for visiting our site</span>
                </Col>
                <Button variant="info">
                    {" "}
                    <Link to="/">Go Back</Link>
                </Button>
            </Container>
        </div>
    );
};

export default CheckOut;
