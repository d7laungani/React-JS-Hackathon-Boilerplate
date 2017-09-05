import * as homeModel from './home.model'

export default (state = homeModel.initialState, action) => {
    switch (action.type) {
        case homeModel.QUERY_PHOTOS_LIST_SUCCESSFUL:
            return {
                ...state,
                photos: action.payload,
            }
        case homeModel.QUERY_PHOTOS_LIST_FAILED:
            return {
                ...state,
                photos: {}
            }
        default:
            return state;
    }
}
