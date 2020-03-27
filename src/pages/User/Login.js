import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import SignInPage from "../../components/User/Signin";
import {withAuthorization} from "../../components/Session";

function Login({state, t}) {

    if (state.isFollowing && state.currentPage !== 'login') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('login')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('loginToGetToken')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <Container>
                <Section>
                    <SignInPage/>
                </Section>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

const condition = authUser => !authUser;

export default withAuthorization(condition)(connect(mapStateToProps)(withTranslation()(Login)));