import React from 'react';
import './orders.css';

export default function Orders(props) {
    console.log(props.orders);
    const list = props.orders.map((order,index) => {
        return <li className='order-list' key={index}><span>{order.completed}</span>
        <span>{order.items[0]}</span>
        <br></br>
        <span>{order.address}</span>
        <br></br>
        <span>{order.shipdate}</span></li>
    })
    return <div><div className ='customHr'></div>{list}</div>
}