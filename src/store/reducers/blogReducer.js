const initState = {
  blogs: [
    {id: "0", title: 'Title 1', content: 'Test 1'},
    {id: "1", title: 'Title 2', content: 'Test 2'},
    {id: "2", title: 'Title 3', content: 'Test 3'}
  ]
};

const blogsReducer = (state=initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('create blog success');
      return state;
    default:
      console.log('action not found :(');
      return state;
  }
};

export default blogsReducer;

