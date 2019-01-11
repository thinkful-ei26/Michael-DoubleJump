import React from 'react';
import {Link} from 'react-router-dom';

export default function ReviewItem({ reviews,review}) {
            return <div className='containerTopReviews'>
            <div className='innerGrid'>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <div>
                <Link to={{pathname:`review/${review.id}`, state:{'reviews':reviews}}} className ='titleTopReviews'>{review.name}</Link>
            </div>
        </div>
        </div>
        
}