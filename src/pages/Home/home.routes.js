import {  Route } from 'react-router-dom'
import React from 'react';
import Home from '../Home/home.container';

export default () => (
    <Route exact path="/" component={Home} />
)