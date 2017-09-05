import { fork, all } from 'redux-saga/effects'

import rootHomeSaga from '../pages/Home/home.sagas'

export default function* rootSagas() {
    yield all([
        fork(rootHomeSaga),
    ])
}
