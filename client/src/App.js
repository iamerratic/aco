import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <AppRoutes />
      </Switch>
    </Router>
  );
}

export default App;
