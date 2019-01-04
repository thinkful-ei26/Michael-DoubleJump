import React from 'react';
import {Link} from 'react-router-dom';
import './mainpage.css';

export default class MainPage extends React.Component {
    render(){
        return(
            <div className='containerFeaturedReview'>
            <h2>Featured Review</h2>
            <img alt='missing' className='imgFeatureReview' src='https://s3.dexerto.com/thumbnails/_thumbnailLarge/Is-Fallout-76-down-Bethesda-confirms-downtime-for-nuke-silo-hot-fix-January-2.jpg'></img>
            <br></br>
            <span>Fallout 76 Angry Joe</span>
            <br></br>
            <div>
            <iframe title='main review' width="500" height="320" src="https://www.youtube.com/embed/SjrDbSgB9IU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <br></br>
            <span>Rating: 1/5</span>
            <br></br>
            <Link to='/store'><span>Get the full transcript here!</span></Link>
            </div>
        )
    }
} 