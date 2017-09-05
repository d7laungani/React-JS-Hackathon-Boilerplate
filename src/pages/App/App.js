import React, {Component} from 'react';
import Routes from '../../routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../images/logo.svg';
class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div style={{margin: 'auto', width:'80%', textAlign:'center'}}>
                    <img src={logo} style={{height: '80px'}} alt="logo" />
                    <Routes/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
