import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const mystyle = {
        height: '100vh'
    }


    function validateForm() {

        return email.length > 0 && password.length > 0;

    }

    function handleSubmit(event) {

        event.preventDefault();

    }


    return (
        <>
            <div className="login">
                <div className="container d-flex justify-content-center align-items-center " style={mystyle}>
                    <div className="row border border-dark rounded p-5" style={{ background: 'Gainsboro' }}>
                        <div className="col">

                            <Form onSubmit={handleSubmit}>

                                <Form.Group size="lg" controlId="email">

                                    <Form.Label>Email</Form.Label>

                                    <Form.Control

                                        autoFocus

                                        type="email"

                                        value={email}

                                        onChange={(e) => setEmail(e.target.value)}

                                    />

                                </Form.Group>

                                <Form.Group size="lg" controlId="password">

                                    <Form.Label>Password</Form.Label>

                                    <Form.Control

                                        type="password"

                                        value={password}

                                        onChange={(e) => setPassword(e.target.value)}

                                    />

                                </Form.Group >
                                <div className="text-center">
                                    <Button className="my-3 px-4" block size="sm" type="submit" disabled={!validateForm()}>Login</Button>
                                </div>
                                <p className="text-secondary"> Forgot password? <Button className="my-3 py-0" variant="secondary" block size="sm" type="submit">Sign-up</Button> here</p>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}