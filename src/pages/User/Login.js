import React, {Fragment} from 'react';
import {Container, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import SignInPage from "../../components/User/Signin";
import {withAuthorization} from "../../components/Session";
import CustomHeader from "../../components/CustomHeader";

function Login({state}) {

    if (state.isFollowing && state.currentPage !== 'login') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'login'} subtitle={'loginToGetToken'}/>
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

export default withAuthorization(condition)(connect(mapStateToProps)(Login));