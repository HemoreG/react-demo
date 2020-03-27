import React from 'react';
import {withTranslation} from 'react-i18next';
import {changeTheme} from "../../actions/appAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthorization} from "../../components/Session";
import * as ROLES from '../../assets/constants/roles';

class Administration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));
            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const {state} = this.props;
        const {users, loading} = this.state;

        if (state.isFollowing && state.currentPage !== 'administration') {
            return <Redirect to={state.currentPage}/>;
        }

        return (
            <div>
                <h1>Admin</h1>
                {loading && <div>Loading ...</div>}

                <UserList users={users}/>
            </div>
        );
    }
}

const UserList = ({users}) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
                <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
                <span>
          <strong>Username:</strong> {user.username}
        </span>
            </li>
        ))}
    </ul>
);

const mapDispatchToProps = dispatch => ({
    changeTheme: () => dispatch(changeTheme()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

const condition = authUser => authUser && authUser.roles === ROLES.ADMIN;

export default withAuthorization(condition)(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Administration)));