import React from 'react';
import {Link} from 'react-router-dom';
import img from '../img/lanky.png';

// This is the 404 page if a route is not found

function NotFound () {
  return (
    <div>
      <h1>404</h1>

      <p>Page not found :(</p>
      <p>The requested page could not be found.</p>
      <p>Go back to <Link to="/">main page</Link></p>
      <p>or check out these githubs: <a href="https://github.com/planeswalker1/">planeswalker1</a>, <a href="https://github.com/colorlessenergy">colorlessenergy</a>, <a href="https://github.com/genterpw">genterpw</a></p>
      <img src={img} alt="Lanky from Growtopia"/>
    </div>
  )
};

export default NotFound;