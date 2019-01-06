import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchReviews} from '../actions'
import './reviewlist.css';

class ReviewList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(fetchReviews())
    }
    createList(){ 
        const temp = this.props.reviews.map((review,index) => {
        return <div key={index} className='containerTopReviews'>
            <div>
            <span className='titleTopReviews'>{review.name}</span>
            <br></br>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <br></br>
            <span>{review.description}</span>
        </div>
        </div>
    })
        return temp;
}
    render(){
        return (
            <div className="folder">
                <h2>Top Reviews</h2>
                <span>{this.createList()}</span>
            </div> 
    );
    }
    
}

const mapStateToProps = state => ({
     reviews: state.reviews.reviews
    });

export default connect(mapStateToProps)(ReviewList);
