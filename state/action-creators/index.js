export const isVisible = (id) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: id,
    });
  };
};
export const isHidden = (id) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
};

export const setCategory = (id) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CATEGORY",
      payload: id,
    });
  };
}
