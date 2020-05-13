import axios from "axios";

import Configuration from './config';
import * as Actions from './actions';


export default class Request{
    api = async (endpoint, method, body, success, error) => {
        console.log(method + " request sent to:", Configuration.url + "/" + endpoint)
        
        return await axios({
                url: Configuration.url + "/" + endpoint,
                method: method,
                data: body ? JSON.stringify(body) : null,
                processData: false,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + await Actions.token.get()
                }
            }).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    
                    return Promise.resolve(response)

                } else {
                    
                    var error = new Error(response.data.message || response.status);
                    error.response = response;
                    return Promise.reject(error)
                
                }
            }).then((response) => {
                const result = response.data;
                const {code, desc} = result.status;

                return this.validate.response(code, desc, result.entity, success, error);
            }).catch(async (e) => {
                console.log("A fatal error occurred with the server during a request to the " + endpoint.split("/")[0] + " API. The error was: `"+ e + "`.", e)

                var code = '';
                var desc = '';
                var data = '';

                if(e.response && e.response.data && e.response.data.status && e.response.data.status.code){
                    var status = e.response.data.status;
                    code = status.code;
                    desc = status.desc;
                    data = e.response.data.entity;
                }else{
                    code = 0;
                    desc = "A server error occurred. Contact support. Code: 1000011111";
                    data = {};
                }

                return this.validate.response(code, desc, data, success, error);

            });

    };

    validate = {
        response: (code, message, data, success, error) => {
            /*
                API Responses Codes

                100 - Success
                101 - Success (Empty Records)
                102 - Error Reading Resource (Parameters are not Complete)
                105 - Email ALready Registered
                115 - Server Error
            */
            if(! message){
                if(code === 100){
                    message = "Your request completed successfully.";
                }else if(code === 101){
                    message = "Your request completed successfully, but there are no records.";
                }else if(code === 102){
                    message = "Error reading resource. Contact the admin.";
                }else if(code === 105){
                    message = "This email is already registered.";
                }else{
                    message = "A server error occurred. Contact the admin.";
                }
            }

            var status = code === 100 || code === 101;

            if(typeof success === 'function' && status) success();
            if(typeof error === 'function' && !status) error();

            return {status, message,  data};
        },
    }
}