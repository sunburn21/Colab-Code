import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';

const inputContainer = styled.div` 
background: blue;
border-color: #424242;
border-radius: 4px;
`
const formHeading = {
    // background: "#424242",
    fontSize: "40px",
    height: "90px",
    color: "#fffff9",
    borderColor: "#424242"

}
const pnl = {
    background: "#212121",
    borderColor: "#424242",
    borderRadius: "4px"
}

const bdy = {
    color: "#fffff9",
    borderColor: "#424242"
}

const inp = {
    width: "70%",
    fontSize: "20px",
    background: "#212121",
    border: "none",
    borderBottom: "3px solid #fffff9"
}

const lst = {
    marginBottom: "40px"
}

const submitbtn = {
    background: "#2196f3",
    border: "1px solid #2196f3 ",
    letterSpacing: "2px",
    color: "white"
}
class RegisterForm extends Component {
    state = {
        name: "",
        password: "",
        confirm_password: ""
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name });
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState({ password })
    }
    onConfirmPasswordChange = (e) => {
        const confirm_password = e.target.value;
        this.setState({ confirm_password })
    }
    onSubmitForm = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                {/* <div style={pnl}> */}
                                <inputContainer>
                                    <div style={bdy} >
                                        <form action="/register" def method="POST" onSubmit={this.onSubmitForm}>
                                            <div className="name" style={lst}>
                                                <h3>Name</h3>
                                                <input type="text" style={inp} onChange={this.onNameChange} />
                                            </div>
                                            <div className="password" style={lst}>
                                                <h3>Password</h3>
                                                <input type="password" style={inp} onChange={this.onPasswordChange} />
                                            </div>
                                            <div className="password" style={lst}>
                                                <h3>Confirm Password</h3>
                                                <input type="password" style={inp} />
                                            </div>
                                            <div className="submit" style={lst}>
                                                <Button bsSize='medium' type="submit" style={submitbtn}>
                                                    SIGN UP!
                        				</Button>
                                            </div>
                                        </form>
                                    </div>
                                </inputContainer>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div >
        )
    }
}

export default RegisterForm;