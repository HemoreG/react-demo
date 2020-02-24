import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import reactIcon from '../logo.svg'

import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Home({t}) {
    const sectionStyle = {
        padding: '3rem 1.5rem 3rem 0rem',
    };

    return (
        <Fragment>
            <Hero color="info" size="fullheight">
                <Hero.Body>
                    <Container>
                        <img src={reactIcon} className="App-logo" alt="logo"/>

                        <Heading>{t('welcome')}</Heading>
                        <Heading subtitle size={3}>
                            {t('homeSubtitle')}
                        </Heading>
                        <Section style={sectionStyle}>
                            <Link to="/theme">
                                <Button>
                                    <span>{t('homeGoToDemo')}</span>
                                    <span className="icon">
										<FontAwesomeIcon icon="chevron-right"/>
									</span>
                                </Button>
                            </Link>
                        </Section>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

export default withTranslation()(Home);
