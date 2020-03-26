import React, {Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import icons from './fontLibrary';
import Loading from "./layouts/Loading";
import {connect} from 'react-redux';
import NavBarCompo from "./components/NavBarCompo";
import {getState} from "./actions/appAction";
import {withAuthentication} from './components/Session';


library.add(...icons);


function App(props) {

    useEffect(function getState() {
        if (props.state.currentPage === '/') {
            props.getState();
        }
    });

    return (
        <Router>
            <NavBarCompo/>
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

const mapDispatchToProps = dispatch => ({
    getState: () => dispatch(getState()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default withAuthentication(connect(mapStateToProps, mapDispatchToProps)(App));