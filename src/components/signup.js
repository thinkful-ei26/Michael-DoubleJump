import React from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import RegistrationForm from './registration-form';

class SignUp extends React.Component {

    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render(){
        return (
            <div>
                <h3> Sign up</h3>
                <RegistrationForm />
            </div>
            );
    }
}


const mapStateToProps = state => ({
    // loggedIn: state.auth.currentUser !== null
   });

export default connect(mapStateToProps)(SignUp);