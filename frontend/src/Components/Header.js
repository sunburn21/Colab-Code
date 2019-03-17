import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
//import { TiSocialInstagramCircular } from 'react-icons/ti'
import Button from 'react-bootstrap/Button';
import { colors } from 'Utilities'
import Login from './Login';

class Header extends Component {
    state = {}

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
                        <Nav.Item>
                            <Login />
                            <NavLink to='/register'>
                                <SignUpBtn size='sm' >
                                    SIGN UP!
                            </SignUpBtn>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </NavWrapper >
        )

    }
}

export default Header;

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