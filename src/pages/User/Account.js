import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {PasswordForgetForm} from "../../components/User/PasswordForget";
import PasswordChangeForm from "../../components/User/PasswordChange";
import {AuthUserContext, withAuthorization} from '../../components/Session';

function Account({state, t}) {

    if (state.isFollowing && state.currentPage !== 'account') {
        return <Redirect to={state.currentPage}/>;
    }

    const Header = state.showHeader ? (
        <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
            <Hero.Body>
                <Container>
                    <Heading>{t('account')}</Heading>
                    <Heading subtitle size={3}>
                        {t('manageYourAccount')}
                    </Heading>
                </Container>
            </Hero.Body>
        </Hero>
    ) : null;

    return (
        <AuthUserContext.Consumer>
            {authUser => (
                <Fragment>
                    {Header}
                    <Container>
                        <h1>Account: {authUser.email}</h1>
                        <PasswordForgetForm/>
                        <PasswordChangeForm/>
                    </Container>
                </Fragment>
            )}
        </AuthUserContext.Consumer>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

const condition = authUser => !!authUser;

export default withAuthorization(condition)(connect(mapStateToProps)(withTranslation()(Account)));