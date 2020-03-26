import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import PasswordChangeForm from "../../components/User/PasswordChange";

function ChangePassword({state, t}) {

    if (state.isFollowing && state.currentPage !== 'changePassword') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('changePassword')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('changeYourPassword')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <Container>
                <PasswordChangeForm/>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(ChangePassword));