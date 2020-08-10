import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

const Header = () => {
    return ( 
        <nav className="ui secondary pointing menu nav">
            <Link to="/" className="item" >STREAMY</Link>
            <div className="right menu">
                <Link to="/" className="item">All streams</Link>
                <GoogleAuth />
            </div>
        </nav>
    );
}
 
export default Header;