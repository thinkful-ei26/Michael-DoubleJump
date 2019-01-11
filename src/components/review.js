import React from 'react';
import './review.css';

export default function Review(props) {
    const {id} = props.match.params;
    console.log(id);
    console.log(props.location.state);
    const temp = props.location.state.reviews.map(item => {
        if(item.id === id){
           return <div className='reviewContainer'>
                <img className='reviewImg' src={item.imgUrl}></img>
                <div className='reviewTitle'>{item.name}</div>
                <span className='reviewBody'>{item.description}</span>
                <p className='reviewBody'>{item.reviewbody}</p>
               </div>
        }
    })
    return <div>{temp}</div>
}