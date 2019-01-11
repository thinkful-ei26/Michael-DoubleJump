import React from 'react';
import './review.css';

export default function Review(props) {
    const {id} = props.match.params;
    const temp = props.location.state.reviews.map(item => {
        if(item.id === id){
            console.log(item);
           return <div className='reviewContainer'>
                <div className='customHr'></div>
                <span className='rating-span'>{item.rating.toString()}/10</span>
                <img alt='doublejump' className='reviewImg-left' src={item.imgUrl}></img>
                <div className='reviewTitle'>{item.name}</div>
                <span className='reviewBody'>{item.description}</span>
                <p className='reviewBody'>{item.reviewbody}</p>
                <img alt='doublejump' className='reviewImg-right' src={item.imgTag}></img>
                <p className='reviewBody'>{item.reviewbody}</p>
                <div className='customHr'></div>
               </div>
        }
    })
    return <div>{temp}</div>
}