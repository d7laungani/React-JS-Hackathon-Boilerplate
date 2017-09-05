import { postRequest, getRequest } from './utils/request'
const api_key = '?api_key=92c2b1eaf3f35884278bf0c33cfd13d7&format=json&nojsoncallback=1'

export const getPhotos = (data) => {
    let url = api_key + data
    return getRequest(url)
        .then(response => {
            return response
        })

}



export const loginUser = (data) => {

    return postRequest('/login', data)

        .then(function(response) {
            return response['data']
        }) .then(
            response => ({ response }),
            error => ({ error: error.message || 'Something shitty happened' })
        );
}

export const loginUserFB = (token) => {
    let url = '/passport/token/facebook?token=' + token
    return getRequest(url)
        .then(response => {
            return response
        })

}
