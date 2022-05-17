const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.includes(action.payload)
        ? state
        : [...state, action.payload];
    case "REMOVE":
      return state.filter((n) => n !== action.payload);
    default:
      return state;
  }
};
export default reducer;
