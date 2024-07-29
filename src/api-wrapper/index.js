import axios from 'axios';


export const Get = async (endpoint, params = null) => {
    return new Promise((resolve, reject) => {
        try {
            axios.get(process.env.REACT_APP_API_BASE_URL.concat(endpoint), {
                params: { params }
            }).then(response => {
                response.statusCode === '200' ? resolve(response.data) : reject(response.data)

            }).catch(err => {
                reject(err);

            })
        }
        catch (exception) {
             //log exception
        }
    })
}

export const Post = async (endpoint, body = null) => {
    return new Promise((resolve, reject) => {
        try {
            axios.Post(process.env.REACT_APP_API_BASE_URL.concat(endpoint), body
            ).then(response => {
                response.statusCode === '200' ? resolve(response.data) : reject(response.data)

            }).catch(err => {
                reject(err);

            })
        }
        catch (exception) {

        }
    })
}
