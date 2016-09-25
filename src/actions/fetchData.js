import React from 'react';
import axios from 'axios';


export function fetchPageOne(){
  const config = {
    url:`http://shopicruit.myshopify.com/products.json?page=1`,
    method:'get'
  }
  return axios.request(config)
    .then(res =>{
      console.log('res',res);
    })
}
