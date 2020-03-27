import React, {Fragment} from 'react';
import {Container, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {PasswordForgetForm} from "../../components/User/PasswordForget";
import CustomHeader from "../../components/CustomHeader";

function ResetPassword({state}) {

    if (state.isFollowing && state.currentPage !== 'resetPassword') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'resetPassword'} subtitle={'resetYourPassword'}/>
            <Container>
                <Section>
                    <PasswordForgetForm/>
                </Section>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(ResetPassword);