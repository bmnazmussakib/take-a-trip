import './bootstrap.min.css';
import Button from '@restart/ui/esm/Button';
import './Login.css';
import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Header from '../Header/Header';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../App';

const Login = () => {

    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        photo: ""
    });


    // Google Sign in
    const handleGoogleSignin = () => {
        
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const { displayName, email, photoURL } = user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setLoggedInUser(signedInUser);
                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    // Facebook Sign in
    const handleFacebookSignin = () => {
        console.log("Facebook Sign in");
    }

    


    // Email Login
    const handleOnBlur = (e) => {
        let isFormValid;
        if (e.target.name === 'email') {
            var isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            var isPasswordValid = /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(e.target.value);
        }
        if (isEmailValid && isPasswordValid) {
            let newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        console.log(user);
    }


    // Email Form Submit
    const handleOnSubmit = () => {

    }

    return (
        <div>
            <Header></Header>
            <Container>
                <Form onSubmit={handleOnSubmit}>
                    <h3 className="mb-5">Login</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Email" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name="password" placeholder="Password" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <div class="d-grid gap-2 mb-4">
                        <input class="btn py-2" style={{ backgroundColor: '#FF6E40', color: '#ffffff' }} type="Submit" value="Login" />
                    </div>
                    <p className="text-center">Don't have account? <span><a href="#" style={{ color: '#FF6E40' }}>Create an account</a></span> </p>
                </Form>
                <br /><br />
                <p className="or m-auto"><span>Or</span></p>
                <br /><br />
                <div className="social-sign-in">
                    <a href="#" onClick={handleGoogleSignin} className="btn social-btn"><FcGoogle className="social-icon" /> <span className="">Sign in with Google</span></a>
                    <br /><br />
                    <a href="#" onClick={handleFacebookSignin} className="btn social-btn"><SiFacebook className="social-icon" style={{ color: '#3b5998' }} /> <span className="">Sign in with Google</span></a>
                </div>
            </Container>
        </div>
    );
};

export default Login;