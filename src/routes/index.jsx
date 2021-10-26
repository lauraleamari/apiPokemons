import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Result from '../pages/Result';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Result} path="/result" />
        </BrowserRouter>
    )
}

export default Routes;