// Lets assume it's the global state (you can add field here)
const initialState = {
    currentPage: '/',
    currentTheme: 'info',
    count: 0,
    visitors: 0,
    showHeader: false
};

// Add your action type here + describe what it does functionally (don't forget to add '...state' to get other fields)

export default function rootReducers(state = initialState, action) {
    switch (action.type) {
        case "TOGGLEHEADER":
            return {
                ...state,
                showHeader: !state.showHeader
            };
        case "CHANGETHEME":
            return {
                ...state,
                currentTheme: state.currentTheme === 'info' ? 'dark' : 'info'
            };
        case "REDUX_WEBSOCKET::MESSAGE":
            if (Object.keys(JSON.parse(action.payload.message)).length > 1) {
                return {
                    ...state,
                    currentPage: JSON.parse(action.payload.message).path,
                    count: JSON.parse(action.payload.message).count,
                    visitors: JSON.parse(action.payload.message).connections
                };
            } else {
                switch (Object.keys(JSON.parse(action.payload.message))[0]) {
                    case 'count':
                        return {
                            ...state,
                            count: JSON.parse(action.payload.message).count,
                        };
                    case 'path':
                        return {
                            ...state,
                            currentPage: JSON.parse(action.payload.message).path,
                        };
                    case 'connections':
                        return {
                            ...state,
                            visitors: JSON.parse(action.payload.message).connections
                        };
                    default:
                        return state;
                }
            }
        default:
            return state;
    }
}
