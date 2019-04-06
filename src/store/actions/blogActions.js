const createBlog = (project) => {
  return {
    type: 'CREATE_BLOG',
    project
  };
};

export default createBlog;