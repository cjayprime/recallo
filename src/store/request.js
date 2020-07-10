import axios from "axios";

import Configuration from "./config";
import { token } from "./account/actions";

export default class Request {
  api = async (endpoint, method, body, success, error) => {
    const result = await axios({
      url: `${Configuration.url}/${endpoint}`,
      method,
      data: body ? JSON.stringify(body) : null,
      processData: false,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await token.get()}`,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response);
        }
        const errorObj = new Error(response.data.message || response.status);
        errorObj.response = response;
        return Promise.reject(errorObj);
      })
      .then((response) => {
        console.log(endpoint, 'raw server response: ', response.data);
        const { data } = response;
        const { code, desc } = data.status;

        return this.validate.response(code, desc, data.entity, success, error);
      })
      .catch(async (e) => {
        console.log(endpoint, 'raw server response: ', e.response);
        console.log(
          `A fatal error occurred with the server during a request to the ${
            endpoint.split("/")[0]
          } API. The error was: \`${e}\`.`,
          e
        );

        let code = "";
        let desc = "";
        let data = "";

        if (
          typeof e.response !== "undefined" &&
          typeof e.response.data !== "undefined" &&
          typeof e.response.data.status !== "undefined" &&
          e.response.data.status.code
        ) {
          const { status } = e.response.data;
          code = status.code;
          desc = status.desc;
          data = e.response.data.entity;
        } else {
          code = 0;
          desc = "A server error occurred. Contact support. Code: 1000011111";
          data = {};
        }

        return this.validate.response(code, desc, data, success, error);
      });

    return result;
  };

  validate = {
    response: (code, msg, data, success, error) => {
      let message = msg;
      /*
        API Responses Codes

        100 - Success
        101 - Success (Empty Records)
        102 - Error Reading Resource (Parameters are not Complete)
        105 - Email ALready Registered
        115 - Server Error
      */
      if (!message) {
        if (code === 100) {
          message = "Your request completed successfully.";
        } else if (code === 101) {
          message =
            "Your request completed successfully, but there are no records.";
        } else if (code === 102) {
          message = "Error reading resource. Contact the admin.";
        } else if (code === 105) {
          message = "This email is already registered.";
        } else {
          message = "A server error occurred. Contact the admin.";
        }
      }

      const status = code === 100 || code === 101;

      if (typeof success === "function" && status) success(data, status);
      if (typeof error === "function" && !status) error(data, status);

      return { status, message, data };
    },
  };
}
