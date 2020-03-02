import {send} from '@giantmachines/redux-websocket';

export const changePage = (path) => ({
    type: 'CHANGEPAGE',
    newPage: path
});

export const changePosition = () => ({
   type: 'CHANGEPOSITION'
});

export const changeTheme = () => ({
    type: 'CHANGETHEME'
});

export const increment = () => send({event: "increment"});
export const decrement = () => send({event: "decrement"});
// Actions needed inside the App Component