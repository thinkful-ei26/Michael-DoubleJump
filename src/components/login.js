import React from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import LoginForm from './login-form';
import {Link,Redirect} from 'react-router-dom';
import './login.css';

class Login extends React.Component {

    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render(){
        if (this.props.loggedIn) {
            return <Redirect to="/profile" />;
        }else{
        return (
            <div className = 'loginBackground'>
                <h3 className='loginText'> Sign in</h3>
                <LoginForm />
                <br></br>
                <hr></hr>
                <h3 className='loginText'> Sign up</h3>
                <Link className='smallloginText' to='/register'>Register</Link>
            </div>
            );
    }
 }
}


const mapStateToProps = state => ({
    loggedIn: state.session.currentUser !== null
   });

export default connect(mapStateToProps)(Login);