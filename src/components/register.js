import React from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import RegistrationForm from './registration-form';
import {Link, Redirect} from 'react-router-dom';


class Register extends React.Component {

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
                <div>
                    <h3> Sign up</h3>
                    <RegistrationForm />
                    <br></br>
                    <hr></hr>
                    <h3> Already have an account? </h3>
                    <Link to='/login'>Login</Link>
                </div>
                );
        }
    }
}


const mapStateToProps = state => ({
    loggedIn: state.session.currentUser !== null
   });

export default connect(mapStateToProps)(Register);