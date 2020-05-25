import PropTypes from "prop-types";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";
import NavigationBar from "./components/navigation_bar";
import client from "./utils/client";
import Paper from "@material-ui/core/Paper";
const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationBar />
        <div>Hello World!</div>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
