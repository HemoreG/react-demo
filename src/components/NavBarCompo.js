import React, {useState} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Navbar} from 'react-bulma-components';

import reactIcon from "../logo.svg";
import {Link} from "react-router-dom";
import {changePath, toggleFollow, toggleHeader} from "../actions/appAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SignOutButton from "./User/Signout";
import {AuthUserContext} from './Session';
import * as ROLES from '../assets/constants/roles';


function NavBarCompo({toggleHeader, toggleFollow, changePath, state, t}) {
    // props contains dispatchers (you need to load them at the bottom of the file)
    const [open, setOpen] = useState(false);
    const [openCounters, setOpenCounters] = useState(true);
    const [openTheme, setOpenTheme] = useState(true);
    const [openOperation, setOpenOperation] = useState(true);
    const [openUsers, setOpenUsers] = useState(true);

    const navigateAndCloseMenu = (path) => {
        setOpen(false);
        changePath(path)
    };

    return (
        <Navbar
            color={state.currentTheme}
            fixed="top"
            active={open}
            transparent={false}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs={Link} to="/">
                    <img
                        className="App-logo"
                        src={reactIcon}
                        alt="Logo React"/>
                </Navbar.Item>
                <Navbar.Item onClick={() => toggleFollow()}>
                    {t(state.isFollowing ? 'dontFollowTheDemo' : 'followTheDemo')}
                </Navbar.Item>
                <Navbar.Item renderAs="div">
                    <span className="icon">
                        <FontAwesomeIcon icon="user"/>
                    </span>
                    <span>{state.visitors}</span>
                </Navbar.Item>
                <Navbar.Burger onClick={() => setOpen(!open)}/>
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item dropdown hoverable>
                        <Navbar.Link arrowless={true} onClick={() => setOpenOperation(!openOperation)}>
                            {t('operations')}
                        </Navbar.Link>
                        <Navbar.Dropdown hidden={!openOperation}>
                            <Navbar.Item renderAs={Link} to="/component"
                                         onClick={() => navigateAndCloseMenu("component")}>
                                {t('reactComponent')}
                            </Navbar.Item>
                            <Navbar.Item renderAs={Link} to="/virtual-dom"
                                         onClick={() => navigateAndCloseMenu("virtual-dom")}>
                                {t('virtualDom')}
                            </Navbar.Item>
                            <Navbar.Item renderAs={Link} to="/redux" onClick={() => navigateAndCloseMenu("redux")}>
                                {t('redux')}
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable>
                        <Navbar.Link arrowless={true} onClick={() => setOpenTheme(!openTheme)}>
                            {t('themes')}
                        </Navbar.Link>
                        <Navbar.Dropdown hidden={!openTheme}>
                            <Navbar.Item renderAs={Link} to="/theme" onClick={() => navigateAndCloseMenu("theme")}>
                                {t('reactState')}
                            </Navbar.Item>
                            <Navbar.Item renderAs={Link} to="/theme-class"
                                         onClick={() => navigateAndCloseMenu("theme-class")}>
                                {t('reactStateClass')}
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item dropdown hoverable>
                        <Navbar.Link arrowless={true} onClick={() => setOpenCounters(!openCounters)}>
                            {t('counters')}
                        </Navbar.Link>
                        <Navbar.Dropdown hidden={!openCounters}>
                            <Navbar.Item renderAs={Link} to="/counter" onClick={() => navigateAndCloseMenu("counter")}>
                                {t('reactCounter')}
                            </Navbar.Item>
                            <Navbar.Item renderAs={Link} to="/live-counter"
                                         onClick={() => navigateAndCloseMenu("live-counter")}>
                                {t('reactLiveCounter')}
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item renderAs={Link} to="/about"
                                 onClick={() => navigateAndCloseMenu("about")}>
                        {t('aboutTitle')}
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <AuthUserContext.Consumer>
                        {
                            authUser => authUser ?
                                (
                                    <Navbar.Item dropdown hoverable>
                                        <Navbar.Link arrowless={true} onClick={() => setOpenUsers(!openUsers)}>
                                            <FontAwesomeIcon icon="user"/>
                                        </Navbar.Link>
                                        <Navbar.Dropdown hidden={!openUsers}>
                                            {
                                                authUser.roles === ROLES.ADMIN && (
                                                    <Navbar.Item renderAs={Link} to="/administration">
                                                        {t('administration')}
                                                    </Navbar.Item>
                                                )
                                            }
                                            <Navbar.Item renderAs={Link} to="/account">
                                                {t('account')}
                                            </Navbar.Item>
                                            <SignOutButton/>
                                        </Navbar.Dropdown>
                                    </Navbar.Item>
                                ) :
                                (
                                    <Navbar.Item renderAs={Link} to="/login">
                                        {t('login')}
                                    </Navbar.Item>
                                )
                        }
                    </AuthUserContext.Consumer>
                    <Navbar.Item onClick={() => toggleHeader()}>
                        {t(state.showHeader ? 'closeHeader' : 'openHeader')}
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

const mapDispatchToProps = dispatch => ({
    changePath: (path) => dispatch(changePath(path)),
    toggleHeader: () => dispatch(toggleHeader()),
    toggleFollow: () => dispatch(toggleFollow())
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(NavBarCompo));