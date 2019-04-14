import React from 'react';
import BlogSummary from './BlogSummary';

// this component lists all blog posts that was passed from the home component

// if there is blog posts to display:
// append an imported component and pass it the current iteration of the blog post as a prop and a key with its id - that is just for react to work
// else
// display a message saying there isn't any blog posts

function BlogList ({blogs}) {
  const blogList = blogs ? (
    blogs.map(blog => {
      return (
        <BlogSummary blog={blog} key={blog.id} />
      );
    })) : (
      <p>There aren't any blogs to display :(. Create a new blog!</p>
    );

  return (
    <div>
      {blogList}
    </div>
  );
};

export default BlogList;