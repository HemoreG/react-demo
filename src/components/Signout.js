import React from 'react';
import {withFirebase} from './Firebase';
import {Navbar} from "react-bulma-components";

const SignOutButton = ({firebase}) => (
    <Navbar.Item onClick={() => firebase.doSignOut()}>
        Sign out
    </Navbar.Item>
);

export default withFirebase(SignOutButton);