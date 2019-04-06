import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from './components/layout/Nav';
import Home from './components/Home';
import CreateBlog from './components/blogs/CreateBlog';
import NotFound from './components/NotFound';
import BlogDetails from './components/blogs/BlogDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={CreateBlog} />
            <Route exact path="/blogs/:id" component={BlogDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
