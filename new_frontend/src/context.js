import { initialState, reducer } from "./reducer";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import produce from "immer";

const AppContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(produce(reducer), initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const logOut = () => {
    dispatch({ type: "CLEAR_USER" });
    setAlert("success", "Logged out!");
  };

  const loadUser = React.useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
      } else {
        delete axios.defaults.headers.common["x-auth-token"];
        dispatch({ type: "CLEAR_USER" });
      }
      const response = await axios.get("/api/auth/user");
      dispatch({ type: "SET_USER", payload: response.data });
    } catch (error) {
      dispatch({ type: "CLEAR_USER" });
    }
    dispatch({ type: "SET_LOADING", payload: false });
  }, []);

  const setAlert = (type, text) => {
    switch (type) {
      case "success":
        toast.success(text);
        break;
      case "error":
        toast.error(text);
        break;
      default:
        toast.info(text);
    }
  };
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        setAlert,
        loadUser,
        logOut,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
export { useGlobalContext };
