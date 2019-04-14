import React, { Component } from 'react';
import {connect} from 'react-redux';
import BlogList from './blogs/BlogList';

// This is the home component
// I append  a component containing all the blog posts
// I pass the retrieved blogs from the redux store to the imported component as a prop

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

// connect to the redux store and get the blogs that is just an array of objects containing the blog information
const mapStateToProps = (state) => {
  return {
    blogs: state.blog.blogs
  }
};

export default connect(mapStateToProps)(Home);