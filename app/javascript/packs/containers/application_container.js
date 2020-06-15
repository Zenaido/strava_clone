import React, { Fragment, useEffect } from 'react'
import NavigationBar from '../components/navigation_bar';
import { useQuery } from '@apollo/react-hooks';
import { loggedInState } from '../state/logged_in';
import { useRecoilValue,useSetRecoilState  } from 'recoil';
import _ from 'lodash'
import gql from 'graphql-tag';
const ApplicationContainer = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const setLoggedIn = useSetRecoilState(loggedInState);
  const userQuery = gql`
  query userQuery{
    currentUser {
      email
    }
    testField
  }
  `
  const { data, loading } = useQuery(userQuery);
  useEffect(() => {
    if(!loading && !_.chain(data).get('currentUser').isNil().value() && !loggedIn){
      setLoggedIn(true);
    } else if(!loading && loggedIn) {
      setLoggedIn(false);
    }
  }, [loading])
  console.log(data)
  
  console.log('logged in', loggedIn)
  
  return <Fragment>
    <NavigationBar />
    {loggedIn.toString()}
  </Fragment>
}

export default ApplicationContainer;