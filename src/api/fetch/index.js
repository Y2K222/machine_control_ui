import Promise from "core-js-pure/features/promise"
import config from "../../config"

export const GET = function (path, token = false) {
    return new Promise((resolve, reject) => {
        let headers = new Headers()
        if (token) headers.append("x-access-token", token)
        let options = {
            method: "GET",
            headers: headers
        }

        fetch(`${config.protocol}${config.host}${path}`, options)
            .then((response) => {
                if (response.status !== 200) reject();
                else return response.json();
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

export const POST = function (path, body, token = false) {
    return new Promise((resolve, reject) => {
        let headers = new Headers()
        headers.append("Content-Type", "application/json")
        if (token) headers.append("x-access-token", token)
        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.protocol}${config.host}${path}`, options)
            .then((response) => {
                if (response.status != 200) reject(response.status);
                else return response.json();
            })
            .then((result) => resolve(result))
            .catch((err) => {
                reject(err);
            });
    })
}

export const UPLOAD_PHOTO = function (path, photo, token = false) {
    return new Promise((resolve, reject) => {
        let headers = new Headers()
        if (token) headers.append("x-access-token", token)
        let formData = new FormData()
        formData.append("photo", photo)

        let options = {
            method: "POST",
            headers: headers,
            body: formData
        }
        fetch(`${config.protocol}${config.host}${path}`, options)
            .then((response) => {
                if (response.status != 200) reject(response.status);
                else return response.json();
            })
            .then((result) => resolve(result))
            .catch((err) => {
                reject(err);
            });
    })
}

export const DELETE_PHOTO = function(path,photo,token=false){
    return new Promise ((resolve,reject)=>{
        let headers = new Headers();
        if(token) headers.append("x-access-token",token)
        let options ={
            method:"GET",
            headers:headers,
        }
        fetch(`${config.protocol}${config.host}/${path}/${photo}`,options)
        .then((response)=>{
            if(response.status != 200) reject(response.status);
            else return response.json()
        })
        .then((result)=> resolve(result))
        .catch((err)=>{
            reject(err)
        })
    })
}



export const PUT = function (path, body, token = false) {
    return new Promise((resolve, reject) => {
        let headers = new Headers()
        headers.append("Content-Type", "application/json")
        if (token) headers.append("x-access-token", token)
        let options = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(body)
        }

        fetch(`${config.protocol}${config.host}${path}`, options)
            .then((response) => {
                if (response.status != 200) reject(response.status);
                else return response.json();
            })
            .then((result) => resolve(result))
            .catch((err) => {
                reject(err);
            });
    })
}

export const DELETE = function (path, token = false) {
    return new Promise((resolve, reject) => {
        let headers = new Headers()
        if (token) headers.append("x-access-token", token)
        let options = {
            method: "DELETE",
            headers: headers
        }

        fetch(`${config.protocol}${config.host}${path}`, options)
            .then((response) => {
                if (response.status != 200) reject(response.status);
                else return response.json();
            })
            .then((result) => resolve(result))
            .catch((err) => {
                reject(err);
            });
    })
}

export const PATCH = function (path, token = false) {
    return new Promise((resolve, reject) => {
        let headers = new Headers()
        if (token) headers.append("x-access-token", token)
        let options = {
            method: "PATCH",
            headers: headers
        }

        fetch(`${config.protocol}${config.host}${path}`, options)
            .then((response) => {
                if (response.status != 200) reject(response.status);
                else return response.json();
            })
            .then((result) => resolve(result))
            .catch((err) => {
                reject(err);
            });
    })
}