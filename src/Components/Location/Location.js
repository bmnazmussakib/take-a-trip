import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Location.css';
import { GoPrimitiveDot } from 'react-icons/go';
import { BsFillPeopleFill } from 'react-icons/bs';
import data from '../../fakeData/fakeData';



const Location = () => {

    const { vehicle } = useParams();
    const fakeData = data;

    const result = fakeData.find(obj => obj.name === `${vehicle}`);
    // console.log(result);

    const handleOnSubmit = (e) => {
        console.log('location submitted');
        // var result = fakeData.find(obj => obj.name === `${vehicle}`);

        document.getElementById('pick-form1').style.display = "none";
        document.getElementById('pick-form2').style.display = "block";

        let from = document.getElementById('where-from').value;
        document.getElementById('fromLocation').innerText = from;

        let to = document.getElementById('where-to').value;
        document.getElementById('toLocation').innerText = to;

        e.preventDefault();
    }

    const handleOnClick = () => {
        console.log("Search Button Clicked");
        // document.getElementById('pick-form1').style.display = "none";
        // document.getElementById('pick-form2').style.display = "block";

        // let from = document.getElementById('where-from').value;
        // document.getElementById('fromLocation').innerText = from;

        // let to = document.getElementById('where-to').value;
        // document.getElementById('toLocation').innerText = to;





    }


    return (
        <div className="pick-form">
            <Form onSubmit={handleOnSubmit} id="pick-form1" style={{ width: "100%", margin: "0 auto", border: " 1px solid rgb(224, 1, 1)", padding: "1.5rem", backgroundColor: "rgb(206, 24, 24)" }}>

                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Pick From</Form.Label>
                    <Form.Control type="text" placeholder="Where from" required id="where-from" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="text" placeholder="Where to" required id="where-to" />
                </Form.Group>

                <div class="d-grid gap-2 mb-4">
                    <input class="btn py-2" style={{ backgroundColor: '#FF6E40', color: '#ffffff' }} type="submit" value="search" onClick={handleOnClick} />
                </div>

            </Form>

            {/* <Form onSubmit={handleOnSubmit} id="pick-form2" style={{width: "100%", margin: "0 auto", border:" 1px solid green", padding: "1.5rem", backgroundColor: "green", display: "block"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Pick From</Form.Label>
                    <Form.Control type="text" placeholder="Where from" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="text" placeholder="Where to" required />
                </Form.Group>
            </Form> */}


            <div onSubmit={handleOnSubmit} id="pick-form2" style={{ width: "100%", margin: "0 auto", border: " 1px solid #FF6E40", padding: "1.5rem", backgroundColor: "#FF6E40", display: "none", borderRadius: "10px" }}>
                <ul >
                    <li style={{ color: 'white', textTransform: 'uppercase' }}><h3 id="fromLocation"></h3></li>
                    <li style={{ color: 'white', textTransform: 'uppercase' }}><h3 id="toLocation"></h3></li>
                    {/* <li id="toLocation" style={{ color: 'white', textTransform: 'uppercase', listStyle: 'none' }}>
                        <div className="row bg-light p-3 rounded">
                            <div className="col-4"><img src={ result.picture } alt="" className="img-fluid" /></div>
                            <div className="col-8 text-dark "><span className="me-2"><b>{ result.name }</b></span><BsFillPeopleFill/> <span className="me-2"><b>4</b></span><b>${ result.price }</b></div>
                        </div>
                    </li> */}

                </ul>

                <div className="row bg-light p-3 my-3" style={{ borderRadius: '10px' }}>
                    <div className="col-4"><img src={result.picture} alt="" className="img-fluid " /></div>
                    <div className="col-8 ">
                        <span className="me-2 text-capitalize"><b>{result.name}</b></span><BsFillPeopleFill style={{ color: '#747372' }} /><span className="ms-1 text-right"><b>4</b></span><b className="ms-3 text-right">${result.price}</b>
                    </div>
                </div>
                <div className="row bg-light p-3 my-3" style={{ borderRadius: '10px' }}>
                    <div className="col-4"><img src={result.picture} alt="" className="img-fluid " /></div>
                    <div className="col-8 ">
                        <span className="me-2 text-capitalize"><b>{result.name}</b></span><BsFillPeopleFill style={{ color: '#747372' }} /><span className="ms-1 text-right"><b>4</b></span><b className="ms-3 text-right">${result.price}</b>
                    </div>
                </div>
                <div className="row bg-light p-3 my-3" style={{ borderRadius: '10px' }}>
                    <div className="col-4"><img src={result.picture} alt="" className="img-fluid " /></div>
                    <div className="col-8 ">
                        <span className="me-2 text-capitalize"><b>{result.name}</b></span><BsFillPeopleFill style={{ color: '#747372' }} /><span className="ms-1 text-right"><b>4</b></span><b className="ms-3 text-right">${result.price}</b>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Location;