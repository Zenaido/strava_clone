import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../state/logged_in";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
export default function dashboard(props) {
  const currentUser = useRecoilValue(currentUserState);
  let match = useRouteMatch({
    path: "/dashboard",
    strict: true,
    sensitive: true,
  });
  console.log(currentUser);
  return (
    match && (
      <Grid container style={{ margin: 15 }}>
        <Grid item md={4}>
          <Card raised>
            <CardHeader
              action={<button>Test</button>}
              title={<div>{currentUser?.name ?? "Luis Hernandez"}</div>}
            />
            Test
          </Card>
        </Grid>
      </Grid>
    )
  );
}
