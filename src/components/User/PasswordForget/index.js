import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withFirebase} from '../../Firebase';
import {withTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
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
        const {t} = this.props;
        const {email, error} = this.state;
        const isInvalid = email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <p className="control has-icons-left">
                        <input
                            name="email"
                            className="input"
                            value={this.state.email}
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
                    <p className="control">
                        <button className="button is-primary" disabled={isInvalid} type="submit">
                            {t('resetMyPassword')}
                        </button>
                    </p>
                </div>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetLinkUntranslated = ({t}) => (
    <p>
        <Link to="/resetPassword">{t('forgotPassword')}</Link>
    </p>
);
const PasswordForgetLink = withTranslation()(PasswordForgetLinkUntranslated);
const PasswordForgetForm = withFirebase(withTranslation()(PasswordForgetFormBase));
export {PasswordForgetForm, PasswordForgetLink};