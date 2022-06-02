import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Button, Col, Container, Form, Row} from 'react-bootstrap'


const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const Auth = async (e) =>{
        e.preventDefault();
        try{
            await axios.post("http://34.142.219.145:80/api/v1/auth/login", {
                username: username,
                password: password
            });
            navigate.push("/dasboard");
        } catch(error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <>
            <Container >
                
                    <Row className="mt-5" >
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={Auth}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"  value={username} onChange={(e)=> setUsername(e.target.value)}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
  )
}

export default Login
