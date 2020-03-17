const initialState = {
    token: '',
};

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case 'LOGIN_SUCCESS': 
            return {
                token: action.token
            };

        default:
            return state;
    }
}

export function isAuthSuccess(state) {
    return !!state.authReducer.token;
};
