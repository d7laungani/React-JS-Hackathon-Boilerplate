import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App/App';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';


// store redux
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
