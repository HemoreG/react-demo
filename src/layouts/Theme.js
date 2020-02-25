import React, {Fragment, useState} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button, Columns, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import codeTheme from '../assets/examples/codeTheme.txt';
import SyntaxHighlighter from "react-syntax-highlighter";
import {hybrid} from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Theme({t}) {
    const [theme, setTheme] = useState('info');
    const sectionStyle = {
        padding: '3rem 1.5rem 3rem 0rem',
    };
    const customStyle = {
        width: '100vh'
    };
    const [code, setCode] = useState('');

    fetch(codeTheme)
        .then((r) => r.text())
        .then(text => {
            setCode(text);
        });

    return (
        <Fragment>
            <Hero color={theme} size="fullheight">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column size={6}>
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
											<FontAwesomeIcon icon="lightbulb"/>
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
                            </Columns.Column>
                            <Columns.Column size={6}>
                                <SyntaxHighlighter showLineNumbers style={hybrid} customStyle={customStyle}>
                                    {code}
                                </SyntaxHighlighter>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

export default withTranslation()(Theme);
