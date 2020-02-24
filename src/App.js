import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import icons from './fontLibrary';

library.add(...icons);


function App() {
  return (
      <Router>
        {routes.map((route, index) => (
            <Suspense key={index} fallback={'LOADING...'}>
              <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
              />
            </Suspense>
        ))}
      </Router>
  );
}

export default App;
