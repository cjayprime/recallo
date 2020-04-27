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
                    reject(error.response)
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
        // const decoded = jwtDecode(access_token);
        // const currentTime = Date.now();
        //   if (decoded.iat < currentTime) {
        //       this.removeToken();
        //       history.push("/");
        //       return false;
        //   } else {
        this.setToken(access_token);
        return true;
        //   }
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