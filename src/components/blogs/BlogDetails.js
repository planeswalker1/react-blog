import React, {Component} from 'react';
import {connect} from 'react-redux';
import NotFound from '../NotFound';

// This displays the blog post information

// if there is a blog post
// display the blog information
// else
// display the NotFound component

class BlogDetails extends Component {
  render() {
    const blog = this.props.blog ? (
      <div>
        <h4>{this.props.blog.title}</h4>
        <p>{this.props.blog.content}</p>
      </div>
    ) : (
      <NotFound />
    );

    return (
      <div>
        {blog}
      </div>
    );
  }
};

// connect to redux store and get the requested blog using the router paramater 'id' to find a blog with that id
const mapStateToProps = (state, ownProps) => {
  const blogId = ownProps.match.params.id;
  console.log(state.blog.blogs.find(blog => blog.id === blogId))
  return {
    blog: state.blog.blogs.find(blog => blog.id === blogId)
  };
};

export default connect(mapStateToProps)(BlogDetails);