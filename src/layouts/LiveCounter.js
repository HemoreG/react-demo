import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Button, Columns, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {decrement, increment} from "../actions/appAction";
import {connect} from "react-redux";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import liveCodeCounter from "../assets/examples/liveCodeCounter.txt";

const customSection = {
    padding: '1.5rem 1.5rem 1.5rem 1.5rem',
};

class LiveCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            count: 0
        };
    }

    componentDidMount() {
        fetch(liveCodeCounter)
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
        this.props.increment()
    }

    down() {
        this.props.decrement()
    }

    render() {
        const {t, state} = this.props;
        return (
            <Fragment>
                {
                    state.showHeader ? (
                        <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                            <Hero.Body>
                                <Container>
                                    <Heading>{t('reactLiveCounter')}</Heading>
                                    <Heading subtitle size={3}>
                                        {t('liveCounterSubtitle')}
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
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(LiveCounter));
