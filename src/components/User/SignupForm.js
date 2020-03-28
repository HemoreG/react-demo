import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
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
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {username, email, passwordOne} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles: ROLES.USER
                    });
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push("/");
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
        } = this.state;
        const {t} = this.props;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

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
                    <p className="control">
                        <button className="button is-primary" disabled={isInvalid} type="submit">{t('signUp')}</button>
                    </p>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLinkUntranslated = ({t}) => (
    <p>
        {t('dontHaveAnAccount')} <Link to="register">{t('signUp')}</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
    withTranslation(),
)(SignUpFormBase);


const SignUpLink = withTranslation()(SignUpLinkUntranslated);
export {SignUpForm, SignUpLink};