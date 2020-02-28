import React, {Fragment, useState} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import codeTheme from '../assets/examples/codeTheme.txt';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";

function Theme({t}) {
    const [theme, setTheme] = useState('info');
    const sectionStyle = {
        padding: '3rem 1.5rem 3rem 0rem',
    };
    const customSection = {
        padding: '1.5rem 1.5rem 1.5rem 1.5rem',
    };
    const [code, setCode] = useState('');

    fetch(codeTheme)
        .then((r) => r.text())
        .then(text => {
            setCode(text);
        });

    return (
        <Fragment>
            <Hero color={theme}>
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
                                    <span>{t('changeTheme')}</span>
                                    <span className="icon">
                                        <FontAwesomeIcon icon="lightbulb"/>
                                    </span>
                                </Button>
                                <Link to="/theme-class">
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
            <Section style={customSection}>
                <SyntaxHighlighter
                    showLineNumbers language="jsx"
                    style={theme === 'info' ? prism : atomDark}
                >
                    {code}
                </SyntaxHighlighter>
            </Section>
        </Fragment>
    );
}

export default withTranslation()(Theme);
