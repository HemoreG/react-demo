import React, {Fragment, useState} from 'react';
import {withTranslation} from 'react-i18next';
import {Button, Columns, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import codeTheme from '../../assets/examples/codeTheme.txt';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {changeTheme} from "../../actions/appAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

function Theme({changeTheme, state, t}) {

    const customSection = {
        padding: '1.5rem 1.5rem 1.5rem 1.5rem',
    };

    const [code, setCode] = useState('');

    fetch(codeTheme)
        .then((r) => r.text())
        .then(text => {
            setCode(text);
        });

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
                                <Heading>{t('reactState')}</Heading>
                                <Heading subtitle size={3}>
                                    {t('themeSubtitle')}
                                </Heading>
                            </Container>
                        </Hero.Body>
                    </Hero>
                ) : null
            }
            <Container>
                <Columns>
                    <Columns.Column size={3}>
                        <Section>
                            <Button
                                onClick={() => changeTheme()}
                            >
                                <span>{t('changeTheme')}</span>
                                <span className="icon">
                                    <FontAwesomeIcon icon="lightbulb"/>
                                </span>
                            </Button>
                        </Section>
                    </Columns.Column>
                    <Columns.Column size={9}>
                        <Section style={customSection}>
                            <SyntaxHighlighter
                                showLineNumbers language="jsx"
                                style={state.currentTheme === 'info' ? prism : atomDark}
                            >
                                {code}
                            </SyntaxHighlighter>
                        </Section>
                    </Columns.Column>
                </Columns>
            </Container>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    changeTheme: () => dispatch(changeTheme()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Theme));
