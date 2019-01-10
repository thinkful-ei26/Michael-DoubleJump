import React from 'react';

export default function ReviewItem({ review, onClick}) {
     
            return <div className='containerTopReviews'>
            <div className='innerGrid'>
            <img className ='imgReviews'src={review.imgUrl} alt='review'></img>
            <div>
                <span className ='titleTopReviews'>{review.name}</span>
            </div>
        </div>
        </div>
        
}