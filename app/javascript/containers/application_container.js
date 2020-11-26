import React, { Fragment, useEffect } from "react";
import NavigationBar from "../components/navigation_bar";
import { useQuery } from "@apollo/react-hooks";
import { loggedInState, currentUserState } from "../state/logged_in";
import { useRecoilValue, useSetRecoilState } from "recoil";
import _ from "lodash";
import gql from "graphql-tag";
import Dashboard from "./dashboard";
const ApplicationContainer = (props) => {
  const loggedIn = useRecoilValue(loggedInState);
  const setLoggedIn = useSetRecoilState(loggedInState);
  const currentUser = useRecoilValue(currentUserState);
  const setCurrentUser = useSetRecoilState(currentUserState);
  const userQuery = gql`
    query userQuery {
      currentUser {
        email
      }
      testField
    }
  `;
  const { data, loading } = useQuery(userQuery);
  useEffect(() => {
    if (
      !loading &&
      !_.chain(data).get("currentUser").isNil().value() &&
      !loggedIn
    ) {
      setLoggedIn(true);
      setCurrentUser(_.get(data, "currentUser"));
    } else if (!loading && loggedIn) {
      setLoggedIn(false);
    }
  }, [loading]);

  return (
    <Fragment>
      <NavigationBar />
      <div className="min-h-full flex bg-white">
        <Dashboard />
      </div>
    </Fragment>
  );
};

export default ApplicationContainer;
