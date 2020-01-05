"use strict";

import axios from 'axios'
import baseURL from '../api/baseurl'

export function request(a) {
  const instance = axios.create({
    // baseURL: 'http://118.190.161.148:81',
    baseURL: process.env.VUE_APP_BASE_API || process.env.baseURL || process.env.apiUrl || "",
    // baseURL: this.HOST,

    timeout: 3000,
    headers: {
      get: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
      },
      post: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
      }
    }
  })
  instance.interceptors.request.use((config) => {
    config.headers['systemCode'] = 'dujie'
    config.headers['secretyKey'] = 'NcEgImWmR6X+hf5oVeFdZA=='
    console.log(process.env.VUE_APP_BASE_API, 222);
    return config


  })

  // instance.interceptors.request.use(
  //   (config) => {
  //     config.headers['x-token'] = 'token'
  //     return config
  //   },
  //   (err) => {
  //     console.log(err);
  //   }
  // )
  // instance.interceptors.reponse.use((config) => {
  //     console.log(config);
  //     return config
  //   }),
  //   (err) => {
  //     console.log(err);
  // }
  return instance(a)

}