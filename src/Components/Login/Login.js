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
import { useNavigate, useLocation } from 'react-router'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';


const Login = () => {


    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let { from } = location.state || { from: { pathname: "/" } };


    // Set Email and Password
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        password: "",
        photo: "",
        error: "",
        success: false
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
                if (loggedInUser) {
                    navigate(from)
                }

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }




    // Get user Email and Password
    const handleOnBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            isFormValid = /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(e.target.value);
            // console.log(e.target.name, ":", isFormValid);
        }
        if (e.target.name === "name") {
            isFormValid = /^[a-zA-Z ]+$/.test(e.target.value);
            // console.log(e.target.name, ":", isFormValid);
        }

        // console.log(isFormValid);

        if (isFormValid) {
            let newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        console.log(user);
    }


    // Email Form Submit
    const handleOnSubmit = (e) => {

        if (user.name && user.email && user.password) {

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(user);
                    if (loggedInUser) {
                        navigate(from)
                    }

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    console.log(error.message);

                });
        }




        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <h4 className="text-center text-danger">{user.error}</h4>
                {user.success && <h4 className="text-center" style={{ color: 'green' }}>Sign up Successfully</h4>}
                <Form onSubmit={handleOnSubmit}>
                    <h3 className="mb-5">Sign up</h3>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control required type="text" name="name" placeholder="Name" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="email" name="email" placeholder="Email" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control required type="password" name="password" placeholder="Password" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <div class="d-grid gap-2 mb-4">
                        <input class="btn py-2" style={{ backgroundColor: '#FF6E40', color: '#ffffff' }} type="Submit" value="Sign up" />
                    </div>
                    <p className="text-center">Already have account? <span><Link to="/signin" style={{ color: '#FF6E40' }}>Sign in</Link></span> </p>
                </Form>
                <br /><br />
                <p className="or m-auto"><span>Or</span></p>
                <br /><br />
                <div className="social-sign-in">
                    <a href="#" onClick={handleGoogleSignin} className="btn social-btn"><FcGoogle className="social-icon" /> <span className="">Sign in with Google</span></a>
                    <br /><br />
                </div>
            </Container>
        </div>
    );
};

export default Login;