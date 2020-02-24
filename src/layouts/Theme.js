import React, {Fragment, useState} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Theme({t}) {
    const [theme, setTheme] = useState('info');
    const sectionStyle = {
        padding: '3rem 1.5rem 3rem 0rem',
    };

    return (
        <Fragment>
            <Hero color={theme} size="fullheight">
                <Hero.Body>
                    <Container>
                        <Heading>{t('reactState')}</Heading>
                        <Heading subtitle size={3}>
                            {t('themeSubtitle')}
                        </Heading>
                        <Section style={sectionStyle}>
                            <Button.Group>
                                <Button
                                    onClick={() => setTheme(theme === 'info' ? 'dark' : 'info')}
                                >
										<span className="icon">
											<FontAwesomeIcon icon="lightbulb" />
										</span>
                                    <span>{t('changeTheme')}</span>
                                </Button>
                                <Link to="/demo">
                                    <Button>
                                        <span>{t('continueDemo')}</span>
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

export default withTranslation()(Theme);
