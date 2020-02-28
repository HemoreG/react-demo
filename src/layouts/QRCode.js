import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {Container, Heading, Hero} from 'react-bulma-components';
import {changePosition} from "../actions/appAction";
import qrCode from '../assets/images/qrcode.svg'
import {Link} from "react-router-dom";

function QRCode({state, t}) {
    // props contains dispatchers (you need to load them at the bottom of the file)

    return (
        <Fragment>
            <Hero color={state.currentTheme === 'light' ? 'info' : 'dark'} size="fullheight">
                <Hero.Body>
                    <Container>
                        <Heading>{t('welcomeQRCode')}</Heading>
                        <Heading subtitle size={3}>
                            {t('homeSubtitleQRCode')}
                        </Heading>
                        <Link to="/">
                            <img alt="QR Code" src={qrCode}/>
                        </Link>
                    </Container>
                </Hero.Body>
            </Hero>
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    props: {
        changePosition: () => dispatch(changePosition()),
    }
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(QRCode));