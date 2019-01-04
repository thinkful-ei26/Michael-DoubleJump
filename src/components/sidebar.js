import React from 'react';
import {connect} from 'react-redux';
import './sidebar.css';
import {Link} from 'react-router-dom';
import Banner from './banner';

export function Sidebar(props) {

    return (
        <React.Fragment>
        <Banner></Banner>
        <div className="topnav">
            <Link to='/'><span className='topnav-left' href="#home">Home</span></Link>
            <Link to='/reviews'><span className='topnav-left' href="#contact">Reviews</span></Link>
            <Link to='/store'><span className='topnav-left' href="#contact">Store</span></Link>
            <Link to='/profile'><span className='topnav-left' href="#about">Profile</span></Link>
            <Link to='/signup'><span className='topnav-right' href="#news">Sign In</span></Link>
        </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({ 
    folderList: ['Home', 'Reviews']
});

export default connect(mapStateToProps)(Sidebar);
