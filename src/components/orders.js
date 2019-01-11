import React from 'react';
import './orders.css';

export default function Orders(props) {
    console.log(props.orders);
    const list = props.orders.map((order,index) => {
        if(order.shipdate){
            return <li className='order-list' key={index}><span>{order.completed}</span>
        <span>{order.items[0]}</span>
        <br></br>
        <span>{order.address}</span>
        <br></br>
        <span>Delivery date: {order.shipdate.split('T')[0]}</span>
        </li>
        }else{
            return <span>No Orders</span>
        }
        
    })
    return <div><div className ='customHr'></div>{list}</div>
}