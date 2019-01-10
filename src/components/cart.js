import React from 'react';
import {fetchCart} from '../actions/index';
import {connect} from 'react-redux';
import CartItem from './cartitem';
import {clearAll} from '../actions';

class Cart extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCart());
    }
    listCart(){
        return this.props.cart.map((item,index) => {
            return <CartItem key={index} item={item}></CartItem>
        })
    }
    render(){
        return<React.Fragment>
            <div>{this.listCart()}</div>
            <button onClick={() => this.props.dispatch(clearAll())}></button>
        </React.Fragment>
    }
}


const mapStateToProps = state => ({ 
    user: state.session.currentUser,
    cart: state.cart.items
});

export default connect(mapStateToProps)(Cart);
