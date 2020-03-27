import React, {Fragment} from 'react';
import {Container} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import PasswordChangeForm from "../../components/User/PasswordChange";
import CustomHeader from "../../components/CustomHeader";

function ChangePassword({state}) {

    if (state.isFollowing && state.currentPage !== 'changePassword') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'changePassword'} subtitle={'changeYourPassword'}/>
            <Container>
                <PasswordChangeForm/>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(ChangePassword);