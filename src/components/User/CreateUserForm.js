import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../Firebase';
import {withTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as ROLES from '../../assets/constants/roles';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    roles: ROLES.USER,
    error: null,
};

class CreateUserFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {username, email, passwordOne, roles} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles
                    });
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push("/administration");
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
            roles
        } = this.state;
        const {t} = this.props;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '' || roles === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            name="username"
                            className="input"
                            value={username}
                            onChange={this.onChange}
                            type="text"
                            placeholder={t('username')}
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon="user"/>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            name="email"
                            className="input"
                            value={email}
                            onChange={this.onChange}
                            type="email"
                            placeholder="Email"
                        />
                        <span className="icon is-small is-left">
                          <FontAwesomeIcon icon="envelope"/>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            name="passwordOne"
                            value={passwordOne}
                            className="input"
                            onChange={this.onChange}
                            type="password"
                            placeholder={t('password')}
                        />
                        <span className="icon is-small is-left">
                      <FontAwesomeIcon icon="lock"/>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            name="passwordTwo"
                            value={passwordTwo}
                            className="input"
                            onChange={this.onChange}
                            type="password"
                            placeholder={t('confirmPassword')}
                        />
                        <span className="icon is-small is-left">
                      <FontAwesomeIcon icon="lock"/>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <div className="select">
                        <select
                            name="roles"
                            value={roles}
                            onChange={this.onChange}
                        >
                            {
                                Object.keys(ROLES).map((role, index) =>
                                    <option key={index}>{role}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="field">
                    <p className="control">
                        <button className="button is-primary" disabled={isInvalid} type="submit">{t('signUp')}</button>
                    </p>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export const CreateUserForm = compose(
    withRouter,
    withFirebase,
    withTranslation(),
)(CreateUserFormBase);
