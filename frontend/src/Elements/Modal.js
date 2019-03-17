import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring/renderprops';
import { FaTimes } from 'react-icons/fa';

import { colors } from 'Utilities';
import { Card } from './Card';
import { Portal, absolute } from 'Utilities'
export class Modal extends Component {
    state = {};
    render() {
        const { large, onToggle, children, on } = this.props;
        return (
            <Portal>
                <Transition
                    items={on}
                    from={{ opacity: 0, bgOpacity: 0, y: -200 }}
                    enter={{ opacity: 1, bgOpacity: 0.9, y: 0 }}
                    leave={{ opacity: 0, bgOpacity: 0, y: 200 }}
                >
                    {on => on && (styles => (
                        <ModalWrapper>
                            <ModalCard
                                large={large}
                                style={{
                                    transform: `translate3d(0,${styles.y},0)`
                                    ,
                                    ...styles
                                }}
                            >
                                <CloseButton onClick={onToggle}>
                                    <FaTimes />
                                </CloseButton>
                                {children}
                            </ModalCard>
                            <Background
                                style={{ opacity: styles.bgOpacity }}
                                onClick={onToggle}
                            />
                        </ModalWrapper>
                    ))}
                </Transition>
            </Portal>
        )
    }
}
const ModalCard = styled(Card)`
  min-width: ${props => props.large ? "400px" : "320px"};
  width:400px;
  position: relative;
  z-index: 10;
`;
const CloseButton = styled.button`
  border:none;    
  background: transparent;
  ${absolute({ x: "right" })};
  padding: none;
  &:focus{
      outline:none;
  }
`;
const Background = styled.div`
  background: ${colors.Navbar_blue};
  ${absolute({ x: "right", y: "top" })};
  opacity: 0.5;
  height: 100vh;
  width: 100vw;
`;
const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;