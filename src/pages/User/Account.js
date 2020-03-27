import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {PasswordForgetForm} from "../../components/User/PasswordForget";
import PasswordChangeForm from "../../components/User/PasswordChange";
import {AuthUserContext, withAuthorization} from '../../components/Session';
import CustomHeader from "../../components/CustomHeader";

function Account({state, t}) {

    if (state.isFollowing && state.currentPage !== 'account') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <AuthUserContext.Consumer>
            {authUser => (
                <Fragment>
                    <CustomHeader title={'account'} subtitle={'manageYourAccount'}/>
                    <Container>
                        <Section>
                            <Heading>{authUser.email}</Heading>
                            <p>{t('resetPassword')}</p>
                            <PasswordForgetForm/>
                        </Section>
                        <Section>
                            <p>{t('changeYourPassword')}</p>
                            <PasswordChangeForm/>
                        </Section>
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