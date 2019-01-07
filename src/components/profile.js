import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Profile extends React.Component{
    listCart(){
        return this.props.cart.map((item,index) => {
            return <li key={index}>{item}</li>
        })
    }
    render(){
        if(this.props.user === null){
            return (<div>
                <span>Login to see your profile.</span>
                <Link to='/login'></Link>
                <span>Register now to make the most of DoubleJumps features!</span>
                <Link to='/register'></Link>
            </div>)
        }else{
            return (<div>
                <span>User profile goes here</span>
                <br></br>
                <span>{this.props.user.firstName}</span>
                <ul>{this.listCart()}</ul>  
            </div>)
        }
    }
}

const mapStateToProps = state => ({ 
    user: state.session.currentUser,
    cart: state.cart.items
});

export default connect(mapStateToProps)(Profile);
