import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
// import {w3cwebsocket as W3CWebSocket} from 'websocket';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const sectionStyle = {
    padding: '3rem 1.5rem 3rem 0rem',
};

// const client = new W3CWebSocket('ws://WWW.XXX.YYY.ZZZ:8000');

class LiveCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            theme: 'info'
        };
    }

    setTheme = () => {
        this.setState({
            theme: this.state.theme === 'info' ? 'dark' : 'info'
        });
    };

    setCode = text => {
        this.setState({
            code: text
        });
    };

    componentDidMount() {
        // fetch(codeThemeClass)
        //     .then((r) => r.text())
        //     .then(text => {
        //         this.setCode(text);
        //     });
        // client.onopen = () => {
        //     console.log('WebSocket Client Connected');
        // };
        // client.onmessage = (message) => {
        //     console.log(message);
        // };
    }

    render() {
        const {t} = this.props;
        return (
            <Fragment>
                <Hero color={this.state.theme}>
                    <Hero.Body>
                        <Container>
                            <Heading>{t('reactStateClass')}</Heading>
                            <Heading subtitle size={3}>
                                {t('themeSubtitleClass')}
                            </Heading>
                            <Section style={sectionStyle}>
                                <Button.Group>
                                    <Button
                                        onClick={() => this.setTheme()}
                                    >
                                        <span>{t('changeTheme')}</span>
                                        <span className="icon">
                                            <FontAwesomeIcon icon="lightbulb"/>
                                        </span>
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
}


export default withTranslation()(LiveCounter);
