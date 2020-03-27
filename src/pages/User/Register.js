import React, {Fragment} from 'react';
import {Container, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {SignUpForm} from "../../components/User/SignupForm";
import CustomHeader from "../../components/CustomHeader";

function Register({state}) {

    if (state.isFollowing && state.currentPage !== 'theme') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'register'} subtitle={'registerToGetToken'}/>
            <Container>
                <Section>
                    <SignUpForm/>
                </Section>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(Register);