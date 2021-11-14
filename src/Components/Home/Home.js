import React from 'react';
import './Home.css';
import bg from './img/Bg.png';
import Header from '../Header/Header';
import { Card, CardGroup, Container } from 'react-bootstrap';
import bike from './img/bike.png';
import car from './img/car.png';
import bus from './img/bus.png';
import train from './img/train.png';

const Home = () => {



    return (
        <div className="home-body" style={{
            
        }}>
            <Header />
            <Container className="card-container">
                <CardGroup className="text-center">
                    <Card className="mx-3 px-5 pt-5 single-card">
                        <Card.Img variant="top" src={bike} className="pb-5"/>
                        <Card.Title className="pb-3">Bike</Card.Title>
                    </Card>
                    <Card className="mx-3 px-5 pt-5 single-card">
                        <Card.Img variant="top" src={car} className="pb-5"/>
                        <Card.Title className="pb-3">Car</Card.Title>
                    </Card>
                    <Card className="mx-3 px-5 pt-5 single-card">
                        <Card.Img variant="top" src={bus} className="pb-5"/>
                        <Card.Title className="pb-3">Bus</Card.Title>
                    </Card>
                    <Card className="mx-3 px-5 pt-5 single-card">
                        <Card.Img variant="top" src={train} className="pb-5"/>
                        <Card.Title className="pb-3">Train</Card.Title>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Home;