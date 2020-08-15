import { takeLatest, put, call } from 'redux-saga/effects';
import { Types as DataTypes } from '../ducks/data';

import Http from '../../services/repository';

/*GET*/
function getDataApiAPI(params) {
    return Http.get('/5d3b57023000005500a2a0a6');
}

function* getDataApi(action) {
    try {
		const response = yield call(getDataApiAPI.bind(this, action.params));

        yield put({
            type: DataTypes.SUCCESS_DATA_API,
            response:response.data.produtos
        });
    }
    catch (err) {
        yield put({
            type: DataTypes.ERROR_DATA_API,
            err
        });
    }
}

export function* getDataApiSaga() {
	yield takeLatest(DataTypes.GET_DATA_API, getDataApi);
}