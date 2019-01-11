import React from 'react';
import {Link} from 'react-router-dom';

export default function ReviewItem({ reviews,review}) {
            return <div className='containerTopReviews'>
            <div className='innerReviewGrid'>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <div>
                <Link to={{pathname:`review/${review.id}`, state:{'reviews':reviews}}} className ='titleTopReviews'>{review.name}</Link>
                <br></br>
                <span>{review.genre}</span>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span> {review.author}: "{review.description}"</span>
            </div>
            <div>
                <span className='hugetext'>{review.rating.toString()}/10</span>
            </div>
            </div>
        </div>
        
}