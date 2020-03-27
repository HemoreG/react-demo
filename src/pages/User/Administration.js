import React, {Fragment} from 'react';
import {withTranslation} from 'react-i18next';
import {changeTheme} from "../../actions/appAction";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthorization} from "../../components/Session";
import * as ROLES from '../../assets/constants/roles';
import CustomHeader from "../../components/CustomHeader";
import {Box, Columns, Container, List, Section} from "react-bulma-components";
import UserList from "../../components/User/UserList";
import {CreateUserForm} from "../../components/User/CreateUserForm";

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
        const {state, t} = this.props;
        const {users, loading} = this.state;

        if (state.isFollowing && state.currentPage !== 'administration') {
            return <Redirect to={state.currentPage}/>;
        }

        return (
            <Fragment>
                <CustomHeader title={'administration'} subtitle={'manageUsers'}/>
                <Container>
                    <Section>
                        <Columns>
                            <Columns.Column size={8}>
                                <Box>
                                    <List hoverable>
                                        {loading && <p>{t('loading')}</p>}
                                        <UserList users={users}/>
                                    </List>
                                </Box>
                            </Columns.Column>
                            <Columns.Column size={4}>
                                <CreateUserForm/>
                            </Columns.Column>
                        </Columns>
                    </Section>
                </Container>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    changeTheme: () => dispatch(changeTheme()),
});

const mapStateToProps = (state) => ({
    state: state.rootReducers
});

const condition = authUser => authUser && authUser.roles === ROLES.ADMIN;

export default withAuthorization(condition)(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Administration)));