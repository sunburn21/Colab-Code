import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components'

import AppRouter from './Router/AppRouter'
import configureStore from './store/configureStore';
import { colors } from "Utilities"

const store = configureStore();
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
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
