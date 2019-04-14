import React, { Component } from 'react';
import {connect} from 'react-redux';
// action creator
import {createBlog} from '../../store/actions/blogActions';

// This is the form component to create a new blog post

class CreateBlog extends Component {
  state = {
    id: Math.floor(Math.random() * 1000) + 20 + '',
    title: '',
    content: ''
  }

  // save user input to local state on input change
  handleChange = (event) => {
    console.log('input onChange ran');
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  // dispatch an action to the reducer to add a blog post to the redux store
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createBlog(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create Blog</h1>
          {/* blog title */}
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          {/* blog content */}
          <div>
            <label htmlFor="content">Content</label>
            <input type="text" id="content" onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Create Blog</button>
          </div>
        </form>
      </div>
    )
  }
}

// Here i am appending to this component a method to dispatch an action to the reducer
// I used an action creator instead of a normal action to showcase redux-thunk
const mapDispatchToProps = (dispatch) => {
  return {
    createBlog: (blog) => {
      dispatch(createBlog(blog));
    }
  }
}

// I pass 'null' first since mapDispatchToProps has to be the second parameter
export default connect(null, mapDispatchToProps)(CreateBlog);