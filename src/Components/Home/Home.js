import React, { useEffect } from 'react';
import './Home.css';
import Header from '../Header/Header';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import data from './data.json';
import data from '../../fakeData/fakeData';
import { FaMotorcycle } from 'react-icons/fa';

const Home = () => {

    // console.log(data);
    // console.log(typeof (data));
    const transport = data.map(data => console.log(data))

    return (
        <div className="home" style={{

        }}>
            <Header />
            <Container className="card-container">
                <CardGroup className="text-center">

                    {
                        data.map(data =>
                            <Card className="mx-3 px-5 pt-5 single-card" key={data.index}>
                                <Link to={`destination/${data.name}`}>
                                    <Card.Img variant="top" src={data.picture} className="pb-5" />
                                    <Card.Title className="pb-3 card-name">{data.name}</Card.Title>
                                </Link>
                            </Card>)
                    }
                    
                </CardGroup>
            </Container>
        </div>
    );
};

export default Home;