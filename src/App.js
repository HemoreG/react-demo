import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import icons from './fontLibrary';
import Loading from "./layouts/Loading";
import {connect} from 'react-redux';
// import {changePage} from './actions/appAction' // Import needed actions here

library.add(...icons);


function App() {
    return (
        <Router>
            {routes.map((route, index) => (
                <Suspense key={index} fallback={<Loading/>}>
                    <Route
                        path={route.path}
                        exact={route.exact}
                        render={route.main}
                    />
                </Suspense>
            ))}
        </Router>
    );
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps)(App);