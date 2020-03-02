import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import reactIcon from '../logo.svg'
import {connect} from 'react-redux';
import {Button, Container, Heading, Hero, Section, Columns} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePosition} from "../actions/appAction";
import qrCode from '../assets/images/qrcode.svg'

function Home({props, state, t}) {
    // props contains dispatchers (you need to load them at the bottom of the file)
    const sectionStyle = {
        padding: '3rem 1.5rem 3rem 0rem',
    };

    const qrStyle = {
        margin: '0rem .5rem .5rem 0rem'
    };
    return (
        <Fragment>
            <Hero color={state.currentTheme === 'light' ? 'info' : 'dark'} size="fullheight">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column>
                                <img src={reactIcon} className="App-logo" alt="logo"/>
                                <Heading>{t('welcome')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('homeSubtitle')}
                                </Heading>            
                            </Columns.Column>
                            <Columns.Column>
                                <img alt="QR Code" src={qrCode}/>
                            </Columns.Column>
                        </Columns>
                        <Section style={sectionStyle}>
                            <Button.Group>
                                <Link to="/theme">
                                    <Button>
                                        <span>{t('homeGoToDemo')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="chevron-right"/>
                                        </span>
                                    </Button>
                                </Link>
                            </Button.Group>
                        </Section>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    props: {
        changePosition: () => dispatch(changePosition()),
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Home));