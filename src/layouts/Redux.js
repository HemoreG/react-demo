import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import redux from '../assets/images/Redux.png'

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
                    {/* TODO : Add Content */}
                    <a target="_blank"
                       rel="noopener noreferrer"
                       href="https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html#/">
                        <Button>
                            {t('externalRessource')}
                        </Button>
                    </a>
                    <img src={redux} alt="Redux"/>
                </Section>
            </Container>
        </Fragment>
    );
}


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(Redux));
