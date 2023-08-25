export const setFromLocation = (location) => {
    return {
        type: 'SET_FROM_LOCATION',
        payload: location,
    };
};

export const setToLocation = (location) => {
    return {
        type: 'SET_TO_LOCATION',
        payload: location,
    };
};

export const setDistance = (distance) => {
    return {
        type: 'SET_DISTANCE',
        payload: distance,
    };
};