import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';
import Banner from './banner';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';

function Sidebar(props) {
    if(props.user !== null){
        return (
            <React.Fragment>
            <div className="topnav">
                <Link to='/'><span className='topnav-left' href="#home">Home</span></Link>
                <Link to='/reviews'><span className='topnav-left' href="#reviews">Reviews</span></Link>
                <Link to='/store'><span className='topnav-left' href="#store">Store</span></Link>
                <span className='topnav-right' onClick={()=> props.dispatch(logout())}>Logout</span>
                <Link to='/cart'><span className='topnav-right' href="#cart">Cart</span></Link>                
                <Link to='/profile'><span className='topnav-right' href="#profile">{props.user.username}</span></Link>
            </div>
            <Banner></Banner>
            </React.Fragment>
        );
    }else{
        return (
            <React.Fragment>
            <div className="topnav">
                <Link to='/'><span className='topnav-left' href="#home">Home</span></Link>
                <Link to='/reviews'><span className='topnav-left' href="#reviews">Reviews</span></Link>
                <Link to='/store'><span className='topnav-left' href="#store">Store</span></Link>
                <Link to='/cart'><span className='topnav-right' href="#cart">Cart</span></Link>   
                <Link to='/login'><span className='topnav-right' href="#login">Sign In</span></Link>
            </div>
            <Banner></Banner>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({ 
    user: state.session.currentUser,
    cart: state.cart.items
});

export default connect(mapStateToProps)(Sidebar);
