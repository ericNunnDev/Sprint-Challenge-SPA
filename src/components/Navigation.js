import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className='nav-wrapper grey darken-1'>
          <ul>
            <li className='active'><Link to='/'>Home</Link></li>
            <li className='active'><Link to='/characters'>Characters</Link></li>
          </ul>
        </nav>
     );
}
 
export default Navigation;