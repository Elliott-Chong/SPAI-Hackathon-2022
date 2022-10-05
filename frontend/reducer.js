const initialState = {
  user: null,
  treasured: {},
  inventory: {},
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
    case "deposit_inventory":
      let new_treasured = state.treasured;
      for (let key in state.inventory) {
        if (new_treasured.hasOwnProperty(key)) {
          new_treasured[key] += state.inventory[key];
        } else {
          new_treasured[key] = state.inventory[key];
        }
      }
      return { ...state, inventory: {}, treasured: new_treasured };

    default:
      return state;
  }
};
export { initialState, reducer };
