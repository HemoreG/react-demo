import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Columns, Container, Heading, Hero, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import infos from '../assets/examples/informations';

import CustomCard from "../components/CustomCard";

function About({state, t}) {

    if (state.isFollowing && state.currentPage !== 'theme') {
        return <Redirect to={state.currentPage}/>;
    }

    return (
        <Fragment>
            {
                state.showHeader ? (
                    <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                        <Hero.Body>
                            <Container>
                                <Heading>{t('aboutTitle')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('aboutSubtitle')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
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

export default connect(mapStateToProps)(withTranslation()(About));
