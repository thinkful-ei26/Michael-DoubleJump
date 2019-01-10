import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchCart} from '../actions/index';
import './profile.css';
import CartItem from './cartitem';
import Cart from './cart';

class Profile extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchCart());
    }
    listCart(){
        return this.props.cart.map((item,index) => {
            return <CartItem key={index} item={item}></CartItem>
        })
    }
    render(){
        if(this.props.user === null){
            return (<div>
                <span>Login to see your profile.</span>
                <Link to='/login'></Link>
                <span>Register now to make the most of DoubleJumps features!</span>
                <Link to='/register'></Link>
            </div>)
        }else{
            return (<div className='profileContainer'>
                <img src='https://www.smashbros.com/assets_v2/img/fighter/pict/dark_samus.png' alt='name'></img>
                <span>Welcome, {this.props.user.firstName} </span>
                <div className='customHr'></div>    
                <div className='rewardsList'>         
                <div>Redeem rewards for shopping!</div>
                <div>DoubleJump Rewards Points</div> 
                <div>Current reward points: 0</div> 
                </div>
                <div className='customHr'></div>
                <Cart></Cart>
            </div>)
        }
    }
}

const mapStateToProps = state => ({ 
    user: state.session.currentUser,
    cart: state.cart.items
});

export default connect(mapStateToProps)(Profile);
