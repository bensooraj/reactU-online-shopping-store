import fetch from 'isomorphic-fetch'
require('es6-promise').polyfill()

export default function fetchAPI(method, url, data) {
    const body = String(method).toLocaleLowerCase() === 'get' ? {} : {
        body: JSON.stringify(data)
    };

    return fetch(url, {
        method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "same-origin",
        ...body
    })
    .then(response => response.json())
    .catch(error => {
        console.log("fetchAPI: ", error);
    })
}