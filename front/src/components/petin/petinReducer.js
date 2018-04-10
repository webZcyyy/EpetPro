import spinner from '../spinner/spinner';
export default function petinReducer(state = {}, action) {
    let newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'requesting':
            spinner.loadSpinner();
            newState.status = 0;
            break;
        case 'ptrequested':
            spinner.closeSpinner();
            newState.status = 1;
            newState.res = action.response;
            break;
        case 'requesterror':
            spinner.closeSpinner();
            newState.status = -1;
            newState.res = action.response;
            break;
    }
    return newState;
}