import React from "react";
import { Redirect, Route } from "react-router";
import { useGlobalContext } from "../context";

const PrivateRoute = ({ component: Component }, ...props) => {
  const {
    state: { is_authenticated, loading },
  } = useGlobalContext();
  return (
    <Route
      {...props}
      render={(props) =>
        !is_authenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
