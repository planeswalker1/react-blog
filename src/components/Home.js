import React, { Component } from 'react';
import {connect} from 'react-redux';
import BlogList from './blogs/BlogList';

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <BlogList blogs={this.props.blogs}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs
  }
};

export default connect(mapStateToProps)(Home);