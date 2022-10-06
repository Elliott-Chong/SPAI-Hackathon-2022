import React from "react";
import { Redirect, Route } from "react-router";
import { useGlobalContext } from "../context";

const PrivateRoute = ({ component: Component }, ...props) => {
  const {
    state: { is_authenticated, loading },
  } = useGlobalContext();
  if (loading) return <></>;
  return (
    <Route
      {...props}
      render={(props) =>
        !is_authenticated ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
