//region Global Imports
import React, { useRef } from 'react';
//endregion

//region Local Imports
import { ACTION_CONSTS, ACTIONS, PATH_GRID, GET } from '~definitions'

console.log(ACTIONS.fetch)
//endregion

//region Reducer
const dataFetchReducer = (state, action) => {
    console.log('action', action);
    switch (action.type) {
        case ACTION_CONSTS.FETCH.REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case ACTION_CONSTS.FETCH.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case ACTION_CONSTS.FETCH.FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};
//endregion

//region Fetch config
const CONTROLLER = new AbortController();
const FETCH_OPTIONS = {
    signal: CONTROLLER.signal,
    method: GET,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    },
}
//endregion

export const useDataApi = ({initialUrl,  options = FETCH_OPTIONS, initialData } = {
    initialUrl: PATH_GRID,
    options: FETCH_OPTIONS, initialData: null
}) => {
    const url = useRef(initialUrl);
    const controller = React.useRef(new AbortController())
    const [state, dispatch] = React.useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    const setUrl = React.useCallback((value) => {
        url.current = value
    }, [url])

    React.useEffect(() => {
        let hasCancel  = false;

        const fetchData = async () => {
            dispatch(ACTIONS.fetch.request());
            try {
                const result = await fetch(url.current, options)
                    .then(response => response.json());

                if (!hasCancel) {
                    dispatch(ACTIONS.fetch.success({ payload: result }));
                }
            } catch (error) {
                if (!hasCancel) {
                    dispatch(ACTIONS.fetch.failure({ payload: error }));
                }
            }
        };

        fetchData();

        return () => {
            hasCancel = true;
        };
    }, [url]);

    return [state, setUrl, controller.current];
};
