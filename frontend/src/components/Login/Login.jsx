// import axios from 'axios';
import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        axios.post('http://localhost:5000/api/auth/login', { email, password })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <div className="card mt-5">    
                            <div className="card-body bg-light">
                                <h2 className="text-center">LOGIN SISTEM</h2>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChangeName} placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Login 