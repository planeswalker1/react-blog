export const createBlog = (blog) => {
    // can now make async calls to a db if there was a db thanks to redux-thunk
  return (dispatch, getState) => {
    // contine with action dispatch to reducer
    dispatch({type: 'CREATE_BLOG', blog});
  };
};