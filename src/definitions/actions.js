//region Local Imports
import { FETCH } from './action-consts';
//endregion

export const action = (type, payload = {}) => ({type, ...payload})

export const ACTIONS = {
    fetch: {
        request: () => action(FETCH.REQUEST),
        success: (payload) => action(FETCH.SUCCESS, payload),
        failure: (payload) => action(FETCH.FAILURE, payload),
    }
}

