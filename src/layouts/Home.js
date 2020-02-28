import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import reactIcon from '../logo.svg'
import {connect} from 'react-redux';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePosition} from "../actions/appAction";

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
                        <img src={reactIcon} className="App-logo" alt="logo"/>
                        <Heading>{t('welcome')}</Heading>
                        <Heading subtitle size={3}>
                            {t('homeSubtitle')}
                        </Heading>
                        <Section style={sectionStyle}>
                            <Button.Group>
                                {
                                    state.position === 'admin' ?
                                        (
                                            <Link to="/qr-code">
                                                <Button className="is-hidden-touch" style={qrStyle}>
                                                    <span className="icon">
                                                        <FontAwesomeIcon icon="qrcode"/>
                                                    </span>
                                                </Button>
                                            </Link>
                                        ) : null
                                }
                                <Button className="is-hidden-touch" onClick={() => props.changePosition()}>
                                    <span className="icon">
                                        <FontAwesomeIcon icon="user-shield"/>
                                    </span>
                                </Button>
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