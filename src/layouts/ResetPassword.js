import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import PasswordForgetPage from "../components/PasswordForget";

function ResetPassword({state, t}) {

    if (state.isFollowing && state.currentPage !== 'resetPassword') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('resetPassword')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('resetYourPassword')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <Container>
                <PasswordForgetPage/>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(ResetPassword));