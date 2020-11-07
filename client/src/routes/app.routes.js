import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoaderComponent from '../components/ui/Loader';

var IndexPage = lazy(() => import('../pages/Index'));

function AppRoutes() {

    return (
        <Suspense fallback={LoaderComponent}>
            <Switch>
                <Route path="/" component={IndexPage} />
            </Switch>
        </Suspense>
    );
}


export default AppRoutes; 