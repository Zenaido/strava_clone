import React from 'react'
import { ApolloProvider } from 'react-apollo';
import PropTypes from 'prop-types'
import client from './utils/client';
const App = props => (
  <ApolloProvider client={client}>
     <div>Hello World!</div>
  </ApolloProvider>
 
);
export default  App ;

