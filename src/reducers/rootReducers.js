// Lets assume it's the global state (you can add field here)
const initialState = {
    currentPage: '/',
    currentTheme: 'light',
    position: 'visitor',
    count: 0
};

// Add your action type here + describe what it does functionally (don't forget to add '...state' to get other fields)

export default function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "CHANGEPAGE":
            return {
                ...state,
                currentPage: action.newPage
            };
        case "CHANGEPOSITION":
            return {
                ...state,
                position: state.position === 'visitor' ? 'admin' : 'visitor'
            };
        case "CHANGETHEME":
            return {
                ...state,
                currentTheme: state.currentTheme === 'light' ? 'dark' : 'light'
            };
        case "REDUX_WEBSOCKET::MESSAGE":
            return {
                ...state,
                count: JSON.parse(action.payload.message).count
            };
        default:
            return state;
    }
}
