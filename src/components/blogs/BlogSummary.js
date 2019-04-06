import React from 'react';
import {Link} from 'react-router-dom';

function BlogSummary ({blog}) {
  return (
    <div>
      <p><Link to={'/blogs/' + blog.id}>{blog.title}</Link></p>
    </div>
  );
};

export default BlogSummary;