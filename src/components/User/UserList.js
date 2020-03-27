import React from "react";
import {Table} from "react-bulma-components";
import {withTranslation} from "react-i18next";

function UserList({users, t}) {
    return (
        <Table>
            <thead>
            <tr>
                <th><abbr title="ID">#</abbr></th>
                <th>{t('username')}</th>
                <th>Email</th>
                <th>{t('roles')}</th>
            </tr>
            </thead>
            {
                users.length > 10 ? (
                    <tfoot>
                    <tr>
                        <th><abbr title="ID">#</abbr></th>
                        <th>{t('username')}</th>
                        <th>Email</th>
                        <th>{t('roles')}</th>
                    </tr>
                    </tfoot>
                ) : null
            }
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <th>{index}</th>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.roles}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
}

export default withTranslation()(UserList);