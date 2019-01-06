import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Profile extends React.Component{

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
            </div>)
        }
    }
}

const mapStateToProps = state => ({ 
    user: state.session.currentUser
});

export default connect(mapStateToProps)(Profile);
