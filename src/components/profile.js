import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {fetchCart, fetchOrderHistory} from '../actions/index';
import './profile.css';
import CartItem from './cartitem';
import Cart from './cart';
import OrdersHistory from './ordershistory'; 
class Profile extends React.Component{
    componentDidMount() {
        this.props.dispatch(fetchCart());
        if(this.props.user !== null){
        this.props.dispatch(fetchOrderHistory());
        }
    }
    listCart(){
        return this.props.cart.map((item,index) => {
            return <CartItem key={index} item={item}></CartItem>
        })
    }
    render(){
        if(this.props.user === null){
            return (<Redirect to='/login'></Redirect>)
        }else{
            return (<div className='profileContainer'>
                <img className='profilePic'src='https://www.smashbros.com/assets_v2/img/fighter/pict/dark_samus.png' alt='name'></img>               
                <span className='welcomeText'>Welcome, {this.props.user.firstName} </span>
                <div className='customHr'></div>    
                <div className='rewardsList'>         
                <div>Redeem rewards for shopping!</div>
                <div>DoubleJump Rewards Points</div> 
                <div>Current reward points: 0</div> 
                </div>
                <div className='customHr'></div>
                <br></br>
                <div>
                <Cart></Cart>
                <OrdersHistory orders={this.props.orders}></OrdersHistory>
                </div>
            </div>)
        }
    }
}

const mapStateToProps = state => ({ 
    user: state.session.currentUser,
    cart: state.cart.items,
    orders: state.orders.orderHistory
});

export default connect(mapStateToProps)(Profile);
