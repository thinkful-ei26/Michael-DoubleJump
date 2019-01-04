import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions';

class MainStore extends React.Component {
    componentDidMount() {
        console.log('hello');
        this.props.dispatch(fetchProducts());
    }
    createList(){ 
        console.log(this.props.products);
        const temp = this.props.products.map((review,index) => {
        return <div className='containerProducts'>
            <div>
            <span className='titleProducts'>{review.name}</span>
            <br></br>
            <img className ='imgProducts'src={review.imgUrl} alt='product'></img>
            <br></br>
            <span>{review.description}</span>
        </div>
        </div>
     })
     console.log(temp);
     return temp;
}
    render(){
        return <div>
                <span>Welcome to the store</span>
                <button>check out</button>
                {this.createList()}
                <button>add to wish list</button>
            </div>
    }
}

const mapStateToProps = state => ({ 
    products: state.store.products
});

export default connect(mapStateToProps)(MainStore);
