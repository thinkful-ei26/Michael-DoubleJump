import React from 'react';
import {connect} from 'react-redux';


class MainStore extends React.Component {
    render(){
        return <div><span>Welcome to the store</span><button>check out</button><button>add to wish list</button></div>
    }
}

const mapStateToProps = state => ({ 
   
});

export default connect(mapStateToProps)(MainStore);
