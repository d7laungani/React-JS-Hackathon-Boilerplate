import { call, put, takeLatest, take, fork, all, throttle } from 'redux-saga/effects'
import * as homeModel from './reducks/home.model'
import { getPhotos } from '../../flikrapi'

function* homeSaga(action) {
    console.log(action.type)
    if (action.type === homeModel.QUERY_PHOTOS_LIST) {
        try {
            const response = yield call(getPhotos, action.payload )
            const photos = response.data.photos.photo

            if (photos != null) {

                yield put({
                    type: homeModel.QUERY_PHOTOS_LIST_SUCCESSFUL,
                    payload: photos
                })
            } else {
                yield put({
                    type: homeModel.QUERY_PHOTOS_LIST_FAILED,
                    payload: response.error
                })

            }
        } catch(e) {

            console.log(e)
            yield put({
                type: homeModel.QUERY_PHOTOS_LIST_FAILED,
                payload: "Unknown error occured"
            })
        }
    }

}

export default function* rootHomeSaga() {
    yield all([
        takeLatest(homeModel.QUERY_PHOTOS_LIST, homeSaga),
    ])

}
