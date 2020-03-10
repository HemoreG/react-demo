import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Container, Heading, Hero, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function VirtualDOM({state, t}) {


    if (state.isFollowing && state.currentPage !== 'virtual-dom') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('virtualDom')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('reactVirtualDomSubtitle')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <Container>
                <Section>
                    {/* TODO : Add Content */}
                </Section>
            </Container>
        </Fragment>
    );
}


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(VirtualDOM));
