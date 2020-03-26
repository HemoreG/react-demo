import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {SignUpLink} from './SignupForm';
import {withFirebase} from '../Firebase';
import {PasswordForgetLink} from './PasswordForget';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withTranslation} from "react-i18next";


const SignInPage = () => (
    <Fragment>
        <SignInForm/>
        <PasswordForgetLink/>
        <SignUpLink/>
    </Fragment>
);
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
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
        const {email, password, error} = this.state;
        const {t} = this.props;
        const isInvalid = password === '' || email === '';
        return (
            <form onSubmit={this.onSubmit}>
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
                            name="password"
                            value={password}
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
                    <p className="control">
                        <button className="button is-primary" disabled={isInvalid} type="submit">
                            {t('login')}
                        </button>
                    </p>
                </div>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
    withTranslation()
)(SignInFormBase);
export default SignInPage;
export {SignInForm};