import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Button, Columns, Container, Heading, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark, prism} from "react-syntax-highlighter/dist/cjs/styles/prism";
import codeCounter from "../../assets/examples/codeCounter.txt";
import {Redirect} from "react-router-dom";
import CustomHeader from "../../components/CustomHeader";

const customSection = {
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
        this.setState({
            count: this.state.count + 1
        });
    }

    down() {
        this.setState({
            count: this.state.count - 1
        });
    }

    reset() {
        this.setState({
            count: 0
        });
    }

    render() {
        const {t, state} = this.props;
        if (state.isFollowing && state.currentPage !== 'counter') {
            return <Redirect to={state.currentPage}/>;
        }
        return (
            <Fragment>
                <CustomHeader title={'reactCounter'} subtitle={'counterSubtitle'}/>
                <Container>
                    <Columns>
                        <Columns.Column size={4}>
                            <Section>
                                <Heading>{this.state.count}</Heading>
                                <Button.Group>
                                    <Button onClick={() => this.down()}>
                                        <span>{t('minus')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="minus"/>
                                        </span>
                                    </Button>
                                    <Button onClick={() => this.reset()}>
                                        <span>{t('reset')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="cookie-bite"/>
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
                        <Columns.Column size={8}>
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


const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(Counter));
