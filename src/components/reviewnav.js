import React from 'react';
import './reviewnav.css';
import {setSearchTerm} from '../actions';
import {connect} from 'react-redux';

class ReviewNav extends React.Component {

    setSearch = term=> {
        this.props.dispatch(setSearchTerm(term))
    }
    render(){
    return (<div className='review-nav'>
        <span onClick={() => this.setSearch('')}>Search Reviews</span>
        <ul>
            <li onClick={() => this.setSearch('Shooter')}>Shooter</li>
            <li onClick={() => this.setSearch('Fantasy')}>Fantasy</li>
            <li onClick={() => this.setSearch('Sci-Fi')}>Sci-Fi</li>
            <li onClick={() => this.setSearch('Action Adventure')}>Action Adventure</li>
            <li onClick={() => this.setSearch('Racing')}>Racing</li>
            <li onClick={() => this.setSearch('Sports')}>Sports</li>
        </ul>
  </div>)
    }
}

const mapStateToProps = state => ({ 
    searchTerm: state.search.searchTerm
});

export default connect(mapStateToProps)(ReviewNav);
