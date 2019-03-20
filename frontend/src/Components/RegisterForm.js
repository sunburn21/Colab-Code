import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { history } from '../Router/AppRouter'

import { colors } from 'Utilities';

class RegisterForm extends Component {
    state = {
        username: "",
        password: "",
        confirm_password: "",
        email: ""
    }
    onUserNameChange = (e) => {
        const username = e.target.value;
        this.setState({ username });
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState({ email })
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
        const user = { ...this.state };
        axios.post('http://localhost:3001/register/', { ...user })
            .then((res) => {
                history.push('/');
                console.log(res.data);
            })
    }
    // onfbLoginClick = (e) => {
    //     e.preventDefault();
    //     window.location.replace('http://localhost:3001/auth/facebook/');
    //     // axios.get('http://localhost:3001/auth/facebook/')
    //     //     .then((res) => {
    //     //         history.push('/');
    //     //         console.log(res.data);
    //     //     })
    // }

    render() {
        return (
            <Fragment>
                <FormContainer>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <FormHeading>
                                SIGN UP!
                            </FormHeading>
                            <InputContainer>
                                <h3>Username</h3>
                                <TextInput value={this.state.username} type="text" onChange={this.onUserNameChange} />
                                <h3>Email</h3>
                                <TextInput value={this.state.email} type="email" onChange={this.onEmailChange} />
                                <h3>Password</h3>
                                <TextInput value={this.state.password} type="password" onChange={this.onPasswordChange} />
                                <h3>Confirm Password</h3>
                                <TextInput value={this.state.confirm_password} type="password" onChange={this.onConfirmPasswordChange} />
                                <div>
                                    <SubmitBtn onClick={this.onSubmitForm} >
                                        SUBMIT
                                    </SubmitBtn>
                                </div>
                                {/* <div>
                                    <SubmitBtn onClick={this.onfbLoginClick} >
                                        LOGIN WITH FACEBOOK
                                    </SubmitBtn>
                                </div> */}
                            </InputContainer>
                        </Col>
                    </Row>
                </FormContainer>
            </Fragment>
        )

    }
}

export default RegisterForm;

const FormHeading = styled.h1`
    color:${colors.text_white};
`
const FormContainer = styled(Container)`
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;
`
const InputContainer = styled(Container)`
    padding:1em;
    background: ${colors.secondary_bg};
    color:${colors.text_white};
    border-color: ${colors.primary_bg};
    border-radius: 4px;
`
const TextInput = styled.input`
    margin-bottom:40px;
    width: 70%;
    font-size: 20px;
    background: ${colors.secondary_bg};
    border: none;
    color:${colors.text_white};
    border-bottom: 3px solid ${colors.text_white};
    &:focus{
        outline: none;
    }
`
const SubmitBtn = styled(Button)`
    background: ${colors.Navbar_blue};
    border: 1px solid ${colors.Navbar_blue};
    letter-spacing: 2px;
    color: white;
`