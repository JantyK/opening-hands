import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, withTheme } from '@material-ui/core/styles';

import MainContainer from './containers/MainContainer';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#282C33',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={muiTheme}>
          <MainContainer />
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withTheme()(App);
