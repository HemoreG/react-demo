import {send} from '@giantmachines/redux-websocket';

export const changeTheme = () => ({
    type: 'CHANGETHEME'
});

export const increment = () => send({event: "increment"});
export const decrement = () => send({event: "decrement"});
export const resetState = () => send({event: "reset"});
export const changePath = (path) => send(localStorage.getItem('token') === 'QP4FAg3TakcxS68B8ekD' ? {
    event: "set_path",
    path: path,
    token: "QP4FAg3TakcxS68B8ekD"
} : null);
// Actions needed inside the App Component