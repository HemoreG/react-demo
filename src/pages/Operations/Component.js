import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import CompoDescription1 from "./layouts/CompoDescription1";
import CompoDescription2 from "./layouts/CompoDescription2";
import CompoDescription3 from "./layouts/CompoDescription3";
import CustomHeader from "../../components/CustomHeader";

function Component({state}) {


    if (state.isFollowing && state.currentPage !== 'component') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'reactComponent'} subtitle={'reactComponentSubtitle'}/>
            <CompoDescription1/>
            <CompoDescription2/>
            <CompoDescription3/>
        </Fragment>
    );
}


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(Component);
