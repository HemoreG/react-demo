import React from 'react';
import {withFirebase} from '../Firebase';
import {Navbar} from "react-bulma-components";
import {withTranslation} from "react-i18next";

const SignOutButton = ({t, firebase}) => (
    <Navbar.Item onClick={() => firebase.doSignOut()}>
        {t('signOut')}
    </Navbar.Item>
);

export default withTranslation()(withFirebase(SignOutButton));