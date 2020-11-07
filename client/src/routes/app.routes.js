import React from 'react';
import { Route } from 'react-router-dom';

import IndexPage from '../pages/Index';

function AppRoutes() {

    return (
        <Route path="/" component={IndexPage} />
    );
}


export default AppRoutes; 