import React from 'react';
import {NavLink} from 'react-router-dom';

function Links () {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/create">New Blog</NavLink></li>
      </ul>
    </div>
  );
};


export default Links;