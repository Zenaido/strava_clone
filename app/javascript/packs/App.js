import React from 'react'
import { ApolloProvider } from 'react-apollo';
import PropTypes from 'prop-types'
import client from './utils/client';
const App = props => (
  <ApolloProvider client={client}>
     <div>App {props.name}!</div>
  </ApolloProvider>
 
);
export default  App ;

App.defaultProps = {
  name: 'David'
}

App.propTypes = {
  name: PropTypes.string
}