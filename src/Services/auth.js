import axios from "axios";

import apiClient from "../store/apiClient";

class AuthService {
    signup = body => {
        return new Promise((resolve, reject) => {
            apiClient("/account", { body })
                .then(res => {
                    console.log("hey successfully signup", res)
                    return resolve(res);
                })
                .catch(error => {
                    console.log("hey the api is nt working", error)
                    reject(error.response)
                })
        })
    }

    signin = body => {
        return new Promise((resolve, reject) => {
            apiClient("/account/login", { body })
                .then(res => {
                    console.log("hey successfully logged in", res)
                    if (res.data.status.code === 100) {
                        this.setToken(res.data.entity.token)
                    }
                    return resolve(res);
                })
                .catch(error => {
                    console.log("hey login failed", error)
                    reject(error.response);
                })
        })
    }

    getAccount = () => {
        return new Promise((resolve, reject) => {
            apiClient("/account")
                .then(response => {
                    if (response.data.status.code === 100) {
                        resolve(response.data);
                    } else {
                        reject(response);
                    }
                })
                .catch(error => reject(error))
        })
    }

    signout = () => {
        return new Promise((resolve, reject) => {
            apiClient("/account/logout")
                .then(res => {
                    if (res.data.status.code === 100) {
                        this.setToken();
                        resolve(res.data);
                    } else {
                        reject(res);
                    }
                })
                .catch(error => reject(error));
        })
    }

    personalInformation = body => {
        return new Promise((resolve, reject) => {
            apiClient("/account/setup/first", { body })
                .then(res => {
                    console.log("hey personal information saved successfully", res)
                    return resolve(res);
                })
                .catch(error => {
                    console.log("hey personal information failed", error)
                    reject(error.response);
                })
        })
    }

    businessInformation = body => {
        return new Promise((resolve, reject) => {
            apiClient("/account/setup/second", { body })
                .then(res => {
                    console.log("hey business information saved successfully", res)
                    return resolve(res);
                })
                .catch(error => {
                    console.log("hey business information not saved", error)
                    reject(error.response);
                })
        })
    }

    isAuthenticated() {
        const token = localStorage.getItem("token");
        if (token) return this.isAuthTokenValid(token);
        return false;
    }

    isAuthTokenValid = access_token => {
        if (!access_token) {
            return false;
        }
        this.setToken(access_token);
        return true;
    };

    setToken = token => {
        if (token) {
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("persist:root");
            delete axios.defaults.headers.common["Authorization"];
        }
    };

    getToken() {
        return localStorage.getItem("token");
    }

    removeToken() {
        localStorage.removeItem("token");
    }
}

const instance = new AuthService();

export default instance;