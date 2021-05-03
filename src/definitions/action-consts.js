export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

const INITIAL_STATE = {}
const createRequestTypes = (base) => [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
}, INITIAL_STATE);

export const FETCH = createRequestTypes('FETCH');
export const DATA = createRequestTypes('DATA');
