import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Button, Columns, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import codeThemeClass from '../assets/examples/codeThemeClass.txt';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {changeTheme} from "../actions/appAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const customSection = {
    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
};

class ThemeClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
        };
    }

    setCode = text => {
        this.setState({
            code: text
        });
    };

    componentDidMount() {
        fetch(codeThemeClass)
            .then((r) => r.text())
            .then(text => {
                this.setCode(text);
            });
    }

    render() {
        const {t, state, changeTheme} = this.props;
        if (state.isFollowing && state.currentPage !== 'theme-class') {
            return <Redirect to={state.currentPage}/>;
        }
        return (
            <Fragment>
                {
                    state.showHeader ? (
                        <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                            <Hero.Body>
                                <Container>
                                    <Heading>{t('reactStateClass')}</Heading>
                                    <Heading subtitle size={3}>
                                        {t('themeSubtitleClass')}
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
                                    {this.state.code}
                                </SyntaxHighlighter>
                            </Section>
                        </Columns.Column>
                    </Columns>
                </Container>

            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changeTheme: () => dispatch(changeTheme()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ThemeClass));