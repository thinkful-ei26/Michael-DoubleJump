import React from 'react';
import './reviewnav.css';

export default class ReviewNav extends React.Component {

    createCart = ()=> {
        return <button onClick={e=> {
            e.preventDefault();
            console.log('he');
        }} >Checkout</button>
    }
    render(){
    return (<div className='review-nav'>
        <span>Search Reviews</span>
        <ul>
            <li>Shooter</li>
            <li>Fantasy</li>
            <li>Sci-Fi</li>
            <li>Action Adventure</li>
            <li>Racing</li>
            <li>Sports</li>
        </ul>
  </div>)
    }
}