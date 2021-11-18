import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const PageNotFound = () => {
    return (
        <div>
            <Header/>
            <Container>
                <h1 style={{color:'red'}}>404 Page Not Found</h1>
            </Container>
        </div>
    );
};

export default PageNotFound;