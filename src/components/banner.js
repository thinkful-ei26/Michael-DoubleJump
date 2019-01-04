import React from 'react';
import './banner.css';
import { Slide } from 'react-slideshow-image';

export default class Banner extends React.Component {
    
    render(){
        const slideImages = [
            'https://i.imgur.com/aEwNXVn.jpg',
            'https://dslv9ilpbe7p1.cloudfront.net/QMEPQFv6b9muDGmJddE59A_store_banner_image.png',
            'http://www.psnation.com/wp-content/uploads/2018/07/Call-of-Duty-Black-Ops-4-updated-banner.png'

          ];
           
          const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
          }
         
        return (
           
            <Slide className='banner-slide' {...properties}>
                <div className="each-slide">
                  <img src='https://i.imgur.com/aEwNXVn.jpg' alt='hello'>
                  </img>
                </div>
                <div className="each-slide">
                <img src='https://dslv9ilpbe7p1.cloudfront.net/QMEPQFv6b9muDGmJddE59A_store_banner_image.png' alt='hello'>
                  </img>
                </div>
                <div className="each-slide">
                <img src='http://www.psnation.com/wp-content/uploads/2018/07/Call-of-Duty-Black-Ops-4-updated-banner.png' alt='hello'>
                  </img>
                </div>
              </Slide>
            
        )
    }
} 
