import React from 'react';

export default function ReviewItem({ review}) {
     
            return <div className='containerTopReviews'>
            <div className='innerGrid'>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <div>
                <span className ='titleTopReviews'>{review.name}</span>
            </div>
        </div>
        </div>
        
}