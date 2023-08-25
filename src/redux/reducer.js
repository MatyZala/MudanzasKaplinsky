// reducers.js
const initialState = {
    from: {
        lat: -31.4135,
        lng: -64.18105,
    },
    to: {
        lat: -31.42913633201445,
        lng: -64.18490748462602,
    },
    distance: null,
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FROM_LOCATION':
            return { ...state, from: action.payload };
        case 'SET_TO_LOCATION':
            return { ...state, to: action.payload };
        case 'SET_DISTANCE':
            return { ...state, distance: action.payload };
        default:
            return state;
    }
};

export default locationReducer;


