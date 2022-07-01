import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className='grey darken-1'>
          <ul className='right'>
            <li><Link className='hoverable' to='/'>Home</Link></li>
            <li><Link className='hoverable' to='/characters'>Characters</Link></li>
          </ul>
        </nav>
     );
}
 
export default Navigation;