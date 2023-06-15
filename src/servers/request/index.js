import axios from "axios";
import React from "react";
import { getItem } from "@/utils/localstorage";

class Request {
  constructor(baseURL, timeout) {
    const instance = axios.create({
      baseURL,
      timeout,
    });

    instance.interceptors.request.use((params) => {
      params.headers.authorization = getItem("token") ?? "";
      React.showLoading(true);
      return params;
    });

    instance.interceptors.response.use(
      (res) => {
        React.showLoading(false);
        return res.data;
      },
      (err) => {
        React.showLoading(false);
        console.log(err);
      }
    );
    this.instance = instance;
  }
  getRequest(url, config) {
    return this.instance.get(url, { params: config });
  }
  postRequest(url, config) {
    return this.instance.post(url, config);
  }
  deleteRequest(url, config) {
    return this.instance.delete(url, config);
  }
}

export default Request;
// export default new Request('http://codercba.com:1888/airbnb/api', 3000)
