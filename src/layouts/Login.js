import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {SignInForm} from "../components/Signin";

function Login({state, t}) {

    if (state.isFollowing && state.currentPage !== 'theme') {
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
                <SignInForm/>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(Login));