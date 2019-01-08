import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchReviews} from '../actions'
import './reviewlist.css';
import ReviewNav from './reviewnav';

class ReviewList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(fetchReviews())
    }
    createList(){ 
        const temp = this.props.reviews.map((review,index) => {
        if(this.props.searchTerm){
            console.log(this.props.searchTerm);
            if(review.genre === this.props.searchTerm){
                return <div key={index} className='containerTopReviews'>
            <div>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <br></br>
            <span>{review.description}</span>
        </div>
        </div>
            }
        }else{
            return <div key={index} className='containerTopReviews'>
            <div>
            <img className ='imgTopReviews'src={review.imgUrl} alt='review'></img>
            <br></br>
            <span>{review.description}</span>
        </div>
        </div>
        }
    })
        return temp;
}
    render(){
        return (
            <div className="overgrid">
                <ReviewNav></ReviewNav>
                <div className="grid">
                    {this.createList()}
                </div>
            </div> 
    );
    }
    
}

const mapStateToProps = state => ({
     reviews: state.reviews.reviews,
     searchTerm: state.search.searchTerm
    });

export default connect(mapStateToProps)(ReviewList);
