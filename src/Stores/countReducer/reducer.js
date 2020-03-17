const initialState = {
    counter: 0
};

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };

        default:
            return state;
    }
}

export function getCounter(state) {
    return state.countReducer.counter;
}