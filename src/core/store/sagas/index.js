import { all, fork } from "redux-saga/effects";

import * as data from "./data";

const getValuesInObject = obj => Object.keys(obj).map(value => obj[value]);

export default function* rootSaga() {
    yield all([
		...getValuesInObject(data),
    ].map(fork));
}