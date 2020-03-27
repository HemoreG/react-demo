import {Container, Heading, Hero} from "react-bulma-components";
import React from "react";
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";

function CustomHeader({state, t, title, subtitle}) {


    return (
        state.showHeader ? (
            <Hero color={state.currentTheme === 'info' ? 'info' : 'dark'}>
                <Hero.Body>
                    <Container>
                        <Heading>{t(title)}</Heading>
                        <Heading subtitle size={3}>
                            {t(subtitle)}
                        </Heading>
                    </Container>
                </Hero.Body>
            </Hero>
        ) : null
    )
}

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps)(withTranslation()(CustomHeader));