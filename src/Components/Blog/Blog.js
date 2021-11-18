import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Header/>
            <Container>
                <h1 className="text-center">This is Blog</h1>
            </Container>
        </div>
    );
};

export default Blog;