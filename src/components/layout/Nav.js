import React from 'react';
import Links from './Links';

// this is the nav that appends an imported Link component that contains some Links

function Nav () {
  return (
    <nav>
      <Links />
    </nav>
  );
};

export default Nav;