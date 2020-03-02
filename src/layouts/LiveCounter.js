import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {Button, Container, Heading, Hero, Section} from 'react-bulma-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changeTheme} from "../actions/appAction";
import {connect} from "react-redux";

const sectionStyle = {
    padding: '3rem 1.5rem 3rem 0rem',
};

const customButton = {
    margin: '0rem .0rem .5rem 0.5rem',
};

class LiveCounter extends React.Component {
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

    render() {
        const {t, props, state} = this.props;
        return (
            <Fragment>
                <Hero color={state.currentTheme === 'light' ? 'info' : 'dark'}>
                    <Hero.Body>
                        <Container>
                            <Heading>{t('reactStateClass')}</Heading>
                            <Heading subtitle size={3}>
                                {t('themeSubtitleClass')}
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
                                    <Link to="/demo">
                                        <Button>
                                            <span>{t('continueDemo')}</span>
                                            <span className="icon">
                                                <FontAwesomeIcon icon="chevron-right"/>
                                            </span>
                                        </Button>
                                    </Link>
                                    <Link to={state.currentPage}>
                                        <Button style={customButton}>
                                            <span>{t('followTheDemo')}</span>
                                            <span className="icon">
                                            <FontAwesomeIcon icon="paper-plane"/>
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

const mapDispatchToProps = dispatch => ({
    props: {
        changeTheme: () => dispatch(changeTheme()),
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(LiveCounter));
