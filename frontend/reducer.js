const initialState = {
  user: null,
  treasured: { shirt: 1 },
  inventory: { bottle: 3 },
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "set_user":
      const { displayName, photoURL, email } = payload;
      return {
        ...state,
        user: {
          displayName,
          photoURL,
          email,
        },
      };
    case "logout":
      return { ...state, user: null };
    case "update_inventory":
      // payload = 'bottle'
      // inventory = {'sunglasses': 2}
      if (state.inventory.hasOwnProperty(payload)) {
        return {
          ...state,
          inventory: {
            ...state.inventory,
            [payload]: state.inventory[payload] + 1,
          },
        };
      } else {
        return { ...state, inventory: { ...state.inventory, [payload]: 1 } };
      }

    default:
      return state;
  }
};
export { initialState, reducer };
