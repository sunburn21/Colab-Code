import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';

import { colors } from 'Utilities';
import { history } from '../Router/AppRouter'
import { login } from '../actions/auth'

const GlobalStyle = createGlobalStyle`
    body{
        overflow:hidden;
    }
`
class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState((state) => ({
            username
        }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState((state) => ({
            password
        }));
    }
    onSubmitClick = (e) => {
        e.preventDefault();
        const user = { ...this.state };
        axios.post('http://localhost:3001/login/', { ...user })
            .then((res) => {
                console.log(res.data._id);
                this.props.dispatch(login(res.data));
                history.push('/');
                this.props.onToggle();
            })
    }
    render() {
        return (
            <Fragment>
                <GlobalStyle />
                <FormHeading>
                    Welcome Back!
                </FormHeading>
                <FormInput value={this.state.username} placeholder="Username" onChange={this.onUsernameChange} />
                <FormInput value={this.state.password} type="password" placeholder="Password" onChange={this.onPasswordChange} />
                <SubmitBtn onClick={this.onSubmitClick}>Login</SubmitBtn>
            </Fragment>
        )
    }
}

export default connect()(LoginForm);


//Styles
const FormHeading = styled.h2`
                text-align:center;
    color: ${colors.secondary_bg};
                `
const FormInput = styled.input`
    font-size:20px;
    color:${colors.Navbar_blue};
    border:3px solid #fcfcfd;
    border-radius:3px;
    width:100%;
    height:3rem;
    padding:1rem;
    margin-top:2rem;
    &:focus{
        outline: none;
    }
`

const SubmitBtn = styled(Button)`
    background:${colors.Navbar_blue};
    width:100%;
    margin-top:2rem;
    font-size:20px;
`

