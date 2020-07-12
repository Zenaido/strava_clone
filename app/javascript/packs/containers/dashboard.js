import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedInState } from "../state/logged_in";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
export default function dashboard(props) {
  let match = useRouteMatch({
    path: "/dashboard",
    strict: true,
    sensitive: true,
  });
  return (
    match && (
      <Grid container>
        <Grid cell md={3}>
          <Card raised>Test</Card>
        </Grid>
      </Grid>
    )
  );
}
