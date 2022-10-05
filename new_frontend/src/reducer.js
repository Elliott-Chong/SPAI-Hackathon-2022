const initialState = {
  user: null,
  loading: true,
  is_authenticated: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      state.loading = payload;
      return;
    case "SET_TOKEN":
      localStorage.setItem("token", payload);
      break;
    case "SET_USER":
      state.is_authenticated = true;
      state.user = payload;
      return;
    case "CLEAR_USER":
      state.is_authenticated = false;
      localStorage.removeItem("token");
      state.user = null;
      return;
    default:
      return state;
  }
};

export { initialState, reducer };
