const initState = {
  blogs: [
    {id: "0", title: 'Title 1', content: 'Test 1'},
    {id: "1", title: 'Title 2', content: 'Test 2'},
    {id: "2", title: 'Title 3', content: 'Test 3'}
  ]
};

// this is where the store actually gets changed
// actions come in and change the store based on what type it contains and maybe some additional information

// we need an initialState so when the app first runs, the reducer knows what the state is

const blogsReducer = (state=initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('create blog success');
      let newPosts = [...state.blogs, action.blog];
      console.log(newPosts);
      return {
        ...state,
        blogs: newPosts
      };
    default:
      console.log('action not found :(');
      return state;
  }
};

export default blogsReducer;

