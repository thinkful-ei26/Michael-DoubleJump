import React from 'react';
import './sidenav.css';

export default class SideNav extends React.Component {

    createCart = ()=> {
        return <button onClick={e=> {
            e.preventDefault();
            console.log('he');
        }} >Checkout</button>
    }
    render(){
    console.log(this.createCart)
    return (<div id="mySidenav" class="sidenav">
    <a href="one" id="cart">{this.createCart()}</a>
  </div>)
    }
}