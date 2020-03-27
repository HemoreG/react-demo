import React, {Fragment} from 'react';
import {Columns, Container, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import infos from '../../assets/examples/informations';

import CustomCard from "../../components/CustomCard";
import CustomHeader from "../../components/CustomHeader";

function About({state}) {

    if (state.isFollowing && state.currentPage !== 'theme') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'aboutTitle'} subtitle={'aboutSubtitle'}/>
            <Container>
                <Columns>
                    <Columns.Column size={4}>
                        <Section>
                            <CustomCard infos={infos.edouard}/>
                            <CustomCard infos={infos.claudie}/>
                            <CustomCard infos={infos.jerome}/>
                        </Section>
                    </Columns.Column>
                    <Columns.Column size={8}>
                        <Section>
                            <CustomCard infos={infos.elixirRepo}/>
                            <CustomCard infos={infos.reactRepo}/>
                        </Section>
                    </Columns.Column>
                </Columns>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(About);
