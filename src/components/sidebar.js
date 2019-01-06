import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import Banner from './banner';

export default function Sidebar(props) {

    return (
        <React.Fragment>
        <Banner></Banner>
        <div className="topnav">
            <Link to='/'><span className='topnav-left' href="#home">Home</span></Link>
            <Link to='/reviews'><span className='topnav-left' href="#reviews">Reviews</span></Link>
            <Link to='/store'><span className='topnav-left' href="#store">Store</span></Link>
            <Link to='/profile'><span className='topnav-left' href="#profile">Profile</span></Link>
            <Link to='/login'><span className='topnav-right' href="#login">Sign In</span></Link>
        </div>
        </React.Fragment>
    );
}
