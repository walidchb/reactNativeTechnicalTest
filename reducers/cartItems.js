const cartItems = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { productinfo: action.payload, QTE: 1 }];
    case "REMOVE_FROM_CART": {
      const item_index = action.index;
      const new_state = [...state];
      new_state.splice(item_index, 1);
      return new_state;
    }

    case "UPDATE_QUANTITY":
      const basket = state.map((product) =>
        product.productinfo.id === action.payload.productinfo.id
          ? action.payload
          : product
      );

      //remove old basket and add the new one to the cookie

      return basket;
  }

  return state;
};

export default cartItems;
