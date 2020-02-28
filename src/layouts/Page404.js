import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Button, Container, Heading, Hero, Section,} from 'react-bulma-components';

import routes from '../routes';
import {changeTheme} from "../actions/appAction";
import {connect} from "react-redux";

function Page404({props, state, data, t}) {

    if (
        routes.findIndex((route) => route.path === data.location.pathname) < 0
    ) {
        const sectionStyle = {
            padding: '3rem 1.5rem 3rem 0rem',
        };

        return (
            <Fragment>
                <Hero color={state.currentTheme === 'light' ? 'light' : 'dark'} size="fullheight">
                    <Hero.Body>
                        <Container>
                            <Heading>{t('pageNotFoundTitle')}</Heading>
                            <p>{t('pageNotFoundContent')}</p>
                            <Section style={sectionStyle}>
                                <Button.Group>
                                    <Button
                                        onClick={() => props.changeTheme()}
                                    >
										<span className="icon">
											<FontAwesomeIcon icon="lightbulb"/>
										</span>
                                        <span>{t('changeTheme')}</span>
                                    </Button>
                                    <Button
                                        onClick={() => data.history.goBack()}
                                    >
										<span className="icon">
											<FontAwesomeIcon icon="chevron-left"/>
										</span>
                                        <span>{t('goBack')}</span>
                                    </Button>
                                    <Link to="/">
                                        <Button>
											<span className="icon">
												<FontAwesomeIcon icon="home"/>
											</span>
                                            <span>{t('goToHome')}</span>
                                        </Button>
                                    </Link>
                                </Button.Group>
                            </Section>
                        </Container>
                    </Hero.Body>
                </Hero>
            </Fragment>
        );
    } else {
        return null;
    }
}

const mapDispatchToProps = dispatch => ({
    props: {
        changeTheme: () => dispatch(changeTheme()),
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Page404));
