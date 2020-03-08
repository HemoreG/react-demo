import {send} from '@giantmachines/redux-websocket';

export const changeTheme = () => ({
    type: 'CHANGETHEME'
});

export const toggleHeader = () => ({
    type: 'TOGGLEHEADER'
});

export const increment = () => send({event: "increment_count"});
export const decrement = () => send({event: "decrement_count"});
export const resetState = () => send({event: "reset_count"});
export const getState = () => send({event: "get_state"});
export const changePath = (path) => send({
    event: "set_path",
    path: path,
    token: localStorage.getItem('token')
});
// Actions needed inside the App Component