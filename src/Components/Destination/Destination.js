import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Destination.css';
import map from './img/Map.png'

const Destination = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="pick-form">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Pick From</Form.Label>
                                <Form.Control type="email" placeholder="Where from" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Pick To</Form.Label>
                                <Form.Control type="password" placeholder="Where to" />
                            </Form.Group>
                            <div class="d-grid gap-2 mb-4">
                                <button class="btn py-2" style={{ backgroundColor: '#FF6E40', color: '#ffffff' }} type="button">Search</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <img src={map} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;