import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchReviews} from '../actions'
import './reviewlist.css';

class ReviewList extends React.Component {
    
    componentDidMount() {
        console.log('hello');
        this.props.dispatch(fetchReviews())
    }
    createList(){ 
        const temp = this.props.reviews.map((review,index) => {
        return <div className='containerTopReviews'>
            <div>
            <span className='titleTopReviews'>{review.name}</span>
            <br></br>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <br></br>
            <span>{review.description}</span>
        </div>
        </div>
    })
        console.log(temp);
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
