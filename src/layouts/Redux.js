import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import withoutRedux from '../assets/images/without-redux.gif'
import withRedux from '../assets/images/with-redux.gif'

function Redux({state, t}) {


    if (state.isFollowing && state.currentPage !== 'redux') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('reactRedux')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('reactReduxSubtitle')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <Container>
                <Section>
                    <Heading>{t('withoutRedux')}</Heading>
                    <p>{t('withoutReduxSubtitle')}</p>
                    <img src={withoutRedux} alt="Without redux"/>
                </Section>
                <Section>
                    <Heading>{t('withRedux')}</Heading>
                    <p>{t('withReduxSubtitle1')}</p>
                    <p>{t('withReduxSubtitle2')}</p>
                    <img src={withRedux} alt="With redux"/>
                </Section>
            </Container>
        </Fragment>
    );
}


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(Redux));
