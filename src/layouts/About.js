import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Card, Columns, Container, Content, Heading, Hero, Image, Media, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import edm from '../assets/images/edm.jfif';
import clm from '../assets/images/clm.jfif';
import jeg from '../assets/images/jeg.jpg';
import logo from '../logo.svg';
import bandeau from '../assets/images/bandeau-universite.jpg'

function About({state, t}) {

    const customCard = {
        marginBottom: '1.5rem',
    };

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
                            <Card style={customCard}>
                                <Card.Content>
                                    <Media>
                                        <Media.Item renderAs="figure" position="left">
                                            <Image size={64} alt="Edouard Menayde" src={edm}/>
                                        </Media.Item>
                                        <Media.Item>
                                            <Heading size={4}>Edouard Menayde</Heading>
                                            <Heading subtitle size={6}>
                                                <a href="https://github.com/edouardmenayde"
                                                   target="_blank"
                                                   rel="noopener noreferrer">@edouardmenayde</a>

                                            </Heading>
                                        </Media.Item>
                                    </Media>
                                    <Content>
                                        French computer science student who loves open-source and libre software /
                                        community.
                                    </Content>
                                </Card.Content>
                            </Card>
                            <Card style={customCard}>
                                <Card.Content>
                                    <Media>
                                        <Media.Item renderAs="figure" position="left">
                                            <Image size={64} alt="Claudie Micat" src={clm}/>
                                        </Media.Item>
                                        <Media.Item>
                                            <Heading size={4}>Claudie Micat</Heading>
                                            <Heading subtitle size={6}>
                                                <a href="https://github.com/claudie-micat"
                                                   target="_blank"
                                                   rel="noopener noreferrer">@claudie-micat</a>
                                            </Heading>
                                        </Media.Item>
                                    </Media>
                                </Card.Content>
                            </Card>
                            <Card style={customCard}>
                                <Card.Content>
                                    <Media>
                                        <Media.Item renderAs="figure" position="left">
                                            <Image size={64} alt="Jérôme GIL" src={jeg}/>
                                        </Media.Item>
                                        <Media.Item>
                                            <Heading size={4}>Jérôme Gil</Heading>
                                            <Heading subtitle size={6}>
                                                <a href="https://github.com/LinkJerome" target="_blank"
                                                   rel="noopener noreferrer">@LinkJerome</a>
                                            </Heading>
                                        </Media.Item>
                                    </Media>
                                    <Content>
                                        Étudiant en informatique à l’UCBL, j'aime travailler sur des projets d’Art,
                                        d'Accessibilité ou la Géomatique.</Content>
                                </Card.Content>
                            </Card>
                        </Section>
                    </Columns.Column>
                    <Columns.Column size={8}>
                        <Section>
                            <Image src={bandeau} alt="Bandeau Lyon 1"/>
                            <img src={logo} alt="React logo" className="App-logo"/>
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
