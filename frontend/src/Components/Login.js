import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import LoginForm from './LoginForm';
import { Toggle, colors } from 'Utilities';
import { Modal } from 'Elements';


const Login = () => {
    return (
        <Fragment>
            <Toggle>
                {({ on, onToggle }) => (
                    <Fragment>
                        <Fragment>
                            <LoginBtn size='sm' onClick={onToggle}>
                                LOGIN
                            </LoginBtn>
                        </Fragment>
                        <Modal large on={on} onToggle={onToggle}>
                            <LoginForm />
                        </Modal>
                    </Fragment>
                )}
            </Toggle>
        </Fragment>
    )
}

export default Login;

const LoginBtn = styled(Button)`
    margin-right: 2px;
    background: white;
    letter-spacing: 2px;
    color: ${colors.Navbar_blue};
`;


