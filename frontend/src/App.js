import React, { Component, Fragment } from 'react';
//import './App.css';
import AppRouter from './Router/AppRouter'
import { createGlobalStyle } from 'styled-components'
import { colors } from "Utilities"
const GlobalStyle = createGlobalStyle`
  html{
    height:100%;
  }
  body{
    background:${colors.primary_bg};
    margin:0;
    padding:0;
    height:100%;
  }
  ::-webkit-scrollbar {
    width: 0px; 
    background: transparent;  /* optional: just make scrollbar invisible */
}
`
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppRouter />
      </Fragment>
    );
  }
}

export default App;
