import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withAuthorization} from "../../Session";

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {passwordOne} = this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
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
        const {passwordOne, passwordTwo, error} = this.state;
        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';
        return (
            <form onSubmit={this.onSubmit}>

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

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withTranslation()(PasswordChangeForm));