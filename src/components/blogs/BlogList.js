import React from 'react';
import BlogSummary from './BlogSummary';

function BlogList ({blogs}) {
  return (
    <div>
      { blogs && blogs.map(blog => {
        return (
          <BlogSummary blog={blog} key={blog.id}/>
        );
      }) }
    </div>
  );
};

export default BlogList;