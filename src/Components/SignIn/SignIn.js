import { getAuth, getRedirectResult, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider } from '@firebase/auth';
import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './SignIn.css';
import { useNavigate, useLocation } from 'react-router'
import { initializeApp } from '@firebase/app';
import firebaseConfig from '../Login/firebase.config';
import { FcGoogle } from 'react-icons/fc';


const Signin = () => {
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let { from } = location.state || { from: { pathname: "/" } };

    // Set Email and Password
    const [user, setUser] = useState({
        isSignedIn: false,
        email: "",
        password: "",
        photo: "",
        error: "",
        success: false
    });



    // Email Login
    const handleOnBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === "password") {
            isFormValid = /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(e.target.value);
            // console.log(e.target.name, ":", isFormValid);
        }

        // console.log(isFormValid);

        if (isFormValid) {
            let newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        // console.log(user);


    }


    // Email Form Submit
    const handleOnSubmit = (e) => {

        if (user.name && user.email && user.password) {
            
            signInWithEmailAndPassword(auth, user.email, user.password)
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

    // Google Sign in
    const handleGoogleSignin = () => {
        const auth = getAuth();
        signInWithRedirect(auth, provider);
        // getRedirectResult(auth)
        //     .then((result) => {
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;
        //         const user = result.user;
        //         const { displayName, email, photoURL } = user;
        //         const signedInUser = {
        //             isSignedIn: true,
        //             name: displayName,
        //             email: email,
        //             photo: photoURL
        //         };
        //         setLoggedInUser(signedInUser);
        //         if (loggedInUser) {
        //             navigate(from)
        //         }
        //     }).catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         const email = error.email;
        //         const credential = GoogleAuthProvider.credentialFromError(error);
        //         // ...
        //     });
    }




    return (
        <div>
            <Header></Header>
            <Container>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <h4 className="text-center text-danger">{user.error}</h4>
                {user.success && <h4 className="text-center" style={{ color: 'green' }}>Signed in Successfully</h4>}
                <Form onSubmit={handleOnSubmit}>
                    <h3 className="mb-5">Sign in</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Control required type="email" name="email" placeholder="Email" className="input" onBlur={handleOnBlur} /> */}
                        <Form.Control required type="email" name="email" placeholder="Email" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Control required type="password" name="password" placeholder="Password" className="input" onBlur={handleOnBlur} /> */}
                        <Form.Control required type="password" name="password" placeholder="Password" className="input" onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>

                    <div class="d-grid gap-2 mb-4">
                        <input class="btn py-2" style={{ backgroundColor: '#FF6E40', color: '#ffffff' }} type="Submit" value="Sign in" />
                    </div>
                    <p className="text-center">Don't have account? <span><Link to="/login" style={{ color: '#FF6E40' }}>Create an account</Link></span> </p>
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

export default Signin;