import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
//import { TiSocialInstagramCircular } from 'react-icons/ti'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import axios from 'axios';

import { logout } from '../actions/auth';
import { colors } from 'Utilities'
import Login from './Login';

class Header extends Component {
    state = {}
    onLogoutClick = () => {
        axios.get('http://localhost:3001/logout/')
            .then(() => {
                this.props.dispatch(logout());
            })
    }
    render() {
        return (
            <NavWrapper sticky="top" >
                <Container>
                    <Nav.Item>
                        <Navbar.Brand>
                            <BrandName to="/">
                                <IconWrapper>
                                    <Navbar.Text>
                                        {/* <TiSocialInstagramCircular /> */}
                                    </Navbar.Text>
                                </IconWrapper>
                                Colab&Code
                            </BrandName>
                        </Navbar.Brand>
                    </Nav.Item>
                    <Nav pullRight>
                        {

                            this.props.user.id
                                ? (
                                    <SignUpBtn onClick={this.onLogoutClick}>
                                        LOGOUT
                                    </SignUpBtn>
                                )
                                : (<Nav.Item>
                                    <Login />
                                    <NavLink to='/register'>
                                        <SignUpBtn size='sm' >
                                            SIGN UP!
                                        </SignUpBtn>
                                    </NavLink>
                                </Nav.Item>)

                        }
                    </Nav>
                </Container>
            </NavWrapper >
        )

    }
}

const mapStateToProps = (state, props) => {
    return ({
        user: state.auth
    })
}

export default connect(mapStateToProps)(Header);

const SignUpBtn = styled(Button)`
margin-left: 2px;
background: ${colors.Navbar_blue};
border: 1px solid white;
letter-spacing: 2px;
color: white;
`

const NavWrapper = styled(Navbar)`
    background: ${colors.Navbar_blue};
    border-color: ${colors.Navbar_blue};
    border-radius: 0;
    list-style-type: none;
    box-shadow: 0px 1px 10px #303030;
`;

const BrandName = styled(Link)`
    font-size:1.1em;
    margin-top: 5px;
    color: white;
    &:hover{
        color:white;
        text-decoration:none;
    }
`;

const IconWrapper = styled.span`
    color:white;
    padding:4px;
    margin-top:5x;
`