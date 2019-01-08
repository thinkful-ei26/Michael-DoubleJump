import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts, addItem} from '../actions';
import StoreNav from './storenav';
import './mainstore.css';

class MainStore extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProducts());
    }
    createList(){
        const onClick = item =>{
            console.log(item);
            this.props.dispatch(addItem(item));
        } 
        const temp = this.props.products.map((product,index) => {
        return <div key={index} className='containerProducts'>
            <div className='innerGrid'>
            <img className ='imgProducts'src={product.imgUrl} alt='product'></img>
            <div>
                <span className ='titleProducts'>{product.name}</span>
                {/*
                TODO: Clean this up and make them margins 
                */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div>
                <span className ='priceProducts'>Buy New: {product.price} </span>
                <button onClick={() => onClick(product.name)} className='buyButton'>add to cart</button>
                </div>
            </div>
        </div>
        </div>
     })
     return temp;
}
    render(){
        return <div className="store-grid">
                <StoreNav/>
                <div className="product-grid">
                    {this.createList()}
                </div>
            </div>
    }
}

const mapStateToProps = state => ({ 
    products: state.store.products
});

export default connect(mapStateToProps)(MainStore);
