import React, {Component, Suspense} from 'react';
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
import {withFirebase} from './components/Firebase';


library.add(...icons);


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
        };
        if (props.state.currentPage === '/') {
            props.getState();
        }
    }

    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? this.setState({authUser})
                    : this.setState({authUser: null});
            },
        );
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {
        return (
            <Router>
                <NavBarCompo authUser={this.state.authUser}/>
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
}

const mapDispatchToProps = dispatch => ({
    getState: () => dispatch(getState()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default withFirebase(connect(mapStateToProps, mapDispatchToProps)(App));