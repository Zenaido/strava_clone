import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

import ApplicationContainer from "../containers/application_container";
import client from "../utils/client";
import theme from "../utils/theme";

const App = (props) => {
  return (
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <ApplicationContainer />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  );
};

export default App;
