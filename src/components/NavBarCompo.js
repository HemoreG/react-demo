import React, {useState} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Navbar} from 'react-bulma-components';
import reactIcon from "../logo.svg";
import {Link} from "react-router-dom";
import {changePath, toggleHeader} from "../actions/appAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function NavBarCompo({toggleHeader, changePath, state, t}) {
    // props contains dispatchers (you need to load them at the bottom of the file)
    const [open, setOpen] = useState(false);

    return (
        <Navbar
            color={state.currentTheme}
            fixed="top"
            active={open}
            transparent={false}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="div">
                    <span className="icon">
                        <FontAwesomeIcon icon="link"/>
                    </span>
                    <span>{state.visitors}</span>
                </Navbar.Item>
                <Navbar.Item renderAs={Link} to={state.currentPage} onClick={() => changePath("/")}>
                    <img
                        className="App-logo"
                        src={reactIcon}
                        alt="Logo React"/>
                    {t('followTheDemo')}
                </Navbar.Item>
                <Navbar.Burger onClick={() => setOpen(!open)}/>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item renderAs={Link} to="theme" onClick={() => changePath("theme")}>
                        {t('reactState')}
                    </Navbar.Item>
                    <Navbar.Item renderAs={Link} to="theme-class" onClick={() => changePath("theme-class")}>
                        {t('reactStateClass')}
                    </Navbar.Item>
                    <Navbar.Item renderAs={Link} to="counter" onClick={() => changePath("counter")}>
                        {t('reactCounter')}
                    </Navbar.Item>
                    <Navbar.Item renderAs={Link} to="live-counter" onClick={() => changePath("live-counter")}>
                        {t('reactLiveCounter')}
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item onClick={() => toggleHeader()}>
                        {t('toggleHeader')}
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

const mapDispatchToProps = dispatch => ({
    changePath: (path) => dispatch(changePath(path)),
    toggleHeader: () => dispatch(toggleHeader())
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(NavBarCompo));