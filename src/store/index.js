import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './store'
import rootSagas from './sagas'
import createHistory from 'history/createBrowserHistory'

import { routerMiddleware } from 'react-router-redux'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Build the middleware for intercepting and dispatching navigation actions
const reactRouterMiddleware = routerMiddleware(history)



const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(reactRouterMiddleware)
    )

);

// Run the sagas
sagaMiddleware.run(rootSagas)

export default store;