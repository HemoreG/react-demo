import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import reactIcon from '../logo.svg'

import {Container, Heading, Hero} from 'react-bulma-components';
import {changeTheme} from "../actions/appAction";
import {connect} from "react-redux";

function Loading({props, state, t}) {

    return (
        <Fragment>
            <Hero color={state.currentTheme === 'light' ? 'info' : 'dark'} size="fullheight">
                <Hero.Body>
                    <Container>
                        <img src={reactIcon} className="App-logo" alt="logo"/>
                        <Heading>{t('loading')}</Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    props: {
        changeTheme: () => dispatch(changeTheme()),
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Loading));
