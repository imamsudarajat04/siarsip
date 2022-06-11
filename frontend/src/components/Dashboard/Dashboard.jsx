//import hook react
import React, { useState, useEffect } from 'react';

//import hook useNavigate from react router dom
import { useNavigate } from 'react-router';

//import axios
import axios from 'axios';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Dashboard() {

    //state user
    const [user, setUser] = useState({});

    //define history
    const navigate = useNavigate();

    //token
    const token = localStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        //fetch user from Rest API
        await axios.get('http://127.0.0.1:8000/api/user')
        .then((response) => {

            //set response user to state
            setUser(response.data);
        })
    }

    //hook useEffect
    useEffect(() => {

        //check token empty
        if(!token) {

            //redirect halaman login
            navigate('/');
        }
        
        //call function "fetchData"
        fetchData();
    }, []);

    //function logout
    const logoutHanlder = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        //fetch Rest API
        await axios.post('http://localhost:8000/api/logout')
        .then(() => {

            //remove token from localStorage
            localStorage.removeItem("token");

            //redirect halaman login
            navigate('/');
        });
    };

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/dashboard">SIARSIP</Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav variant="tabs" activeKey="1">
                        <Nav.Item>
                            <Nav.Link disabled>{user.name}</Nav.Link>
                        </Nav.Item>
                            <NavDropdown title="Pengaturan" id="nav-dropdown">
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>Another action</NavDropdown.Item>
                                <NavDropdown.Item>Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><a onClick={logoutHanlder}>Logout</a></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* <button onClick={logoutHanlder} className="btn btn-md btn-danger">LOGOUT</button> */}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}

export default Dashboard;