import React, {Component, Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {Box, Columns, Container, Heading, Hero, List, Section} from 'react-bulma-components';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import AppList from "../components/AppList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const customForm = {
    marginTop: '1.5rem'
};

class VirtualDOM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: ['Menage', 'M1if13']
        };
    }

    onChange = (event) => {
        this.setState({term: event.target.value});
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };

    removeTask = (index) => {
        const newTasks = this.state.items;
        newTasks.splice(index, 1);
        if (index >= 0) {
            this.setState({
                items: newTasks
            });
        }
    };

    render() {
        const {t, state} = this.props;

        if (state.isFollowing && state.currentPage !== 'virtual-dom') {
            return <Redirect to={state.currentPage}/>;
        }

        return (
            <Fragment>
                {
                    state.showHeader ? (
                        <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                            <Hero.Body>
                                <Container>
                                    <Heading>{t('virtualDom')}</Heading>
                                    <Heading subtitle size={3}>
                                        {t('reactVirtualDomSubtitle')}
                                    </Heading>
                                </Container>
                            </Hero.Body>
                        </Hero>
                    ) : null
                }
                <Container>
                    <Columns>
                        <Columns.Column size={4}>
                            <Section>
                                <Heading>{t('inspectThePage')}</Heading>
                                <p>{t('inspectThePageDescription1')}</p>
                                <p>{t('inspectThePageDescription2')}</p>
                                <form style={customForm} onSubmit={this.onSubmit}>
                                    <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" value={this.state.term} onChange={this.onChange}/>
                                        </div>
                                        <div className="control">
                                            <button className="button">
                                                <FontAwesomeIcon size="xs" icon="plus"/>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Section>
                        </Columns.Column>
                        <Columns.Column size={8}>
                            <Section>
                                <Box>
                                    <List hoverable>
                                        <AppList items={this.state.items}
                                                 removeItem={(index) => this.removeTask(index)}/>
                                    </List>
                                </Box>
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

export default connect(mapStateToProps)(withTranslation()(VirtualDOM));
