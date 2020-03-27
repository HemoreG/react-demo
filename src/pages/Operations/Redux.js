import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Columns, Container, Heading, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import withoutRedux from '../../assets/images/without-redux.gif'
import withRedux from '../../assets/images/with-redux.gif'
import CustomHeader from "../../components/CustomHeader";

function Redux({state, t}) {


    if (state.isFollowing && state.currentPage !== 'redux') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            <CustomHeader title={'reactRedux'} subtitle={'reactReduxSubtitle'}/>
            <Container>
                <Section>
                    <Columns>
                        <Columns.Column>
                            <Heading>{t('withoutRedux')}</Heading>
                            <p>{t('withoutReduxSubtitle')}</p>
                            <img src={withoutRedux} alt="Without redux"/>
                        </Columns.Column>
                        <Columns.Column>
                            <Heading>{t('withRedux')}</Heading>
                            <p>{t('withReduxSubtitle1')}</p>
                            <p>{t('withReduxSubtitle2')}</p>
                            <img src={withRedux} alt="With redux"/>
                        </Columns.Column>
                    </Columns>
                </Section>
            </Container>
        </Fragment>
    );
}


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(Redux));
