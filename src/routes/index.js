import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import NotFoundPage from '../components/404Page/'

import HomeRoute from '../pages/Home/home.routes'

export default () => (

    <BrowserRouter>
        <Switch>
            <HomeRoute/>
            <Route path="*" component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>

)
