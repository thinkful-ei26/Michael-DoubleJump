import React from 'react';
import {fetchCart} from '../actions/index';
import {connect} from 'react-redux';
import CartItem from './cartitem';
import {clearAll, newCart} from '../actions';
import './cart.css';

class Cart extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCart());
    }
    renderTotal(){
        const temp = this.props.cart.length * 59.99;
        return `${temp}`;
    }
    listCart(){
        return this.props.cart.map((item,index) => {
            return <CartItem key={index} item={item}></CartItem>
        })
    }
    render(){
        if(this.props.cart.length === 0){
            return <div className='displayTitle'>
                Your cart is empty
            </div>
        }else{
            return<div className='cartItems'>
            <div>{this.listCart()}</div>
            <div className='customHr'></div>   
            <span>Total: {this.renderTotal()} plus tax</span>
            <button onClick={() => this.props.dispatch(clearAll())}>Checkout</button>
            <button onClick={() => this.props.dispatch(newCart())}>Clear cart</button>
        </div>
        }
    }
}


const mapStateToProps = state => ({ 
    user: state.session.currentUser,
    cart: state.cart.items
});

export default connect(mapStateToProps)(Cart);
