import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className ="navbarStyle">
            <ul>
                <li><Link to ='/beers'> All Beers></Link></li>
                <li><Link to='/random-beer'>Randon Beer</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar
