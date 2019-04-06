import React, {Component} from 'react';
import {connect} from 'react-redux';

class BlogDetails extends Component {
  render() {
    const blog = this.props.blog ? (
      <div>
        <h4>{this.props.blog.title}</h4>
        <p>{this.props.blog.content}</p>
      </div>
    ) : (
      <div>Blog Not Found</div>
    );

    return (
      <div>
        {blog}
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const blogId = ownProps.match.params.id;
  console.log(state.blog.blogs.find(blog => blog.id === blogId))
  return {
    blog: state.blog.blogs.find(blog => blog.id === blogId)
  };
};

export default connect(mapStateToProps)(BlogDetails);