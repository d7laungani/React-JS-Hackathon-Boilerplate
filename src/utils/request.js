import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.flickr.com/services/rest',
})

export const getRequest = (url) => (
    instance.get(url)
)

export const postRequest = (url, data) => (
    instance.post(url, data)
)