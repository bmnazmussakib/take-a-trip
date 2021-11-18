import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Location from '../Location/Location';
import './Destination.css';
import map from './img/Map.png'

const Destination = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    {/* Location container */}
                    <Col sm={4}>
                        <Location/>
                    </Col>

                    {/* Map container */}
                    <Col sm={8}>
                        <img src={map} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Destination;