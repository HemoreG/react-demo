import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import reactIcon from '../logo.svg'

import {Container, Heading, Hero} from 'react-bulma-components';

function Loading({t}) {

    return (
        <Fragment>
            <Hero color="info" size="fullheight">
                <Hero.Body>
                    <Container>
                        <img src={reactIcon} className="App-logo" alt="logo"/>
                        <Heading>{t('loading')}</Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

export default withTranslation()(Loading);
