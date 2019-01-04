import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Sidebar from './sidebar';
import ReviewList from './reviewlist';
import SignUp from './signup';
import MainStore from './mainstore';
import Profile from './profile';
import MainPage from './mainpage';
import './homepage.css';

export default class HomePage extends React.Component{
    
    render(){
        return (<Router>
            <div>
            <Sidebar></Sidebar>
     
            <main>
                <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/reviews" component={ReviewList} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/store" component={MainStore} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                   
            </main>
            </div>
    </Router>)
    }
}