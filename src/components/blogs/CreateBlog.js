import React, { Component } from 'react'

class CreateBlog extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (event) => {
    console.log('input onChange ran');
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Create Blog</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
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

export default CreateBlog;