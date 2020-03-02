import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button, Container, Heading, Hero, Section, Columns} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeTheme, increment} from "../actions/appAction";
import {connect} from "react-redux";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import codeCounter from "../assets/examples/codeCounter.txt";

const sectionStyle = {
    padding: '3rem 1.5rem 3rem 0rem',
};

const sectionCounter = {
    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            count: 0
        };
    }

    componentDidMount() {
        fetch(codeCounter)
            .then((r) => r.text())
            .then(text => {
                this.setCode(text);
            });
    }

    setCode = text => {
        this.setState({
            code: text
        });
    };

    up() {
        this.props.props.increment()
    }

    down() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        const {t, props, state} = this.props;
        return (
            <Fragment>
                <Hero color={state.currentTheme === 'light' ? 'info' : 'dark'}>
                    <Hero.Body>
                        <Container>
                            <Heading>{t('reactCounter')}</Heading>
                            <Heading subtitle size={3}>
                                {t('counterSubtitle')}
                            </Heading>
                            <Section style={sectionStyle}>
                                <Button.Group>
                                    <Button
                                        onClick={() => props.changeTheme()}
                                    >
                                        <span>{t('changeTheme')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="lightbulb"/>
                                        </span>
                                    </Button>
                                    <Link to="/live-counter">
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
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            <Section style={sectionCounter}>
                                <Heading>{state.count}</Heading>
                                <Button.Group>
                                    <Button onClick={() => this.down()}>
                                        <span>{t('minus')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="minus"/>
                                        </span>
                                    </Button>
                                    <Button onClick={() => this.up()}>
                                        <span>{t('plus')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="plus"/>
                                        </span>
                                    </Button>
                                </Button.Group>
                            </Section>
                        </Columns.Column>
                        <Columns.Column size={9}>
                            <SyntaxHighlighter
                                showLineNumbers language="jsx"
                                style={state.currentTheme === 'light' ? prism : atomDark}
                            >
                                {this.state.code}
                            </SyntaxHighlighter>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    props: {
        changeTheme: () => dispatch(changeTheme()),
        increment: () => dispatch(increment())
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Counter));
