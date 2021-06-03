import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { productRate } from "../../Redux/Actions/productActions";

const Review = ({ history }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");
    const [rate, setRate] = useState(0);
    const review = [rate, comment];
    console.log(review);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(productRate(review, history));
        history.push("/");
    };
    return (
        <div>
            <Form className="p-5">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Write your commment
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Comment"
                            name="comment"
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>
                            Rate
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="1"
                                label="1 Star"
                                onClick={(e) => setRate(e.target.value)}
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="2"
                                label="2 Stars"
                                onClick={(e) => setRate(e.target.value)}
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="3"
                                label="3 Stars"
                                onClick={(e) => setRate(e.target.value)}
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="4"
                                label="4 Stars"
                                onClick={(e) => setRate(e.target.value)}
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                name="rate"
                                value="5"
                                label="5 Stars"
                                onClick={(e) => setRate(e.target.value)}
                                id="formHorizontalRadios3"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={handleSubmit}>
                            Send Review
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Review;
