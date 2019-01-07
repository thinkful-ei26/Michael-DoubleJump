import React from 'react';
import './storenav.css';

export default class StoreNav extends React.Component {

    createCart = ()=> {
        return <button onClick={e=> {
            e.preventDefault();
            console.log('he');
        }} >Checkout</button>
    }
    render(){
    console.log(this.createCart)
    return (<div className='store-nav'>
        <span>Search Store</span>
        <span>Shooter</span>
        <span>Fantasy</span>
        <span>Sci-Fi</span>
        <span>Action Adventure</span>
        <span>Racing</span>
        <span>Sports</span>
  </div>)
    }
}