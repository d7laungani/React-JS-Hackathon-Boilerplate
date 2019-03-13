import React, {Component} from 'react';
import Routes from '../../routes'
import logo from '../../images/logo.svg';
class App extends Component {
    render() {
        return (
                <div style={{margin: 'auto', width:'80%', textAlign:'center'}}>
                    <img src={logo} style={{height: '80px'}} alt="logo" />
                    <Routes/>
                </div>
        );
    }
}

export default App;
