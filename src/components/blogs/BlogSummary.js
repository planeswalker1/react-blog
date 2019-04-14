import React from 'react';
import {Link} from 'react-router-dom';

// This is the blog summary that displays the title of a blog post as a link

// It takes in an individual blog post that was passed down as a prop and use it's title for the title, and the id to create a link to it

function BlogSummary ({blog}) {
  return (
    <div>
      <p><Link to={'/blogs/' + blog.id}>{blog.title}</Link></p>
    </div>
  );
};

export default BlogSummary;