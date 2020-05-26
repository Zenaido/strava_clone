import React, { Fragment } from 'react'
import NavigationBar from '../components/navigation_bar';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
const ApplicationContainer = (props) => {
  const userQuery = gql`
  query userQuery{
    currentUser {
      email
    }
  }
  `
  const { data, loading } = useQuery(userQuery);
  
  return <Fragment>
    <NavigationBar />
    {!loading && JSON.stringify(data)}
  </Fragment>
}

export default ApplicationContainer;