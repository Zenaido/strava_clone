import PropTypes from "prop-types";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { RecoilRoot } from 'recoil';
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import ApplicationContainer from './containers/application_container'
import theme from "./utils/theme";
import client from "./utils/client";
const App = (props) => {


  return (
    <RecoilRoot>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <ApplicationContainer/>
      </ApolloProvider>
    </ThemeProvider>
    </RecoilRoot>

  );
};

export default App;
