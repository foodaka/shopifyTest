import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import {
  FETCH_SHOPIFY_API,
  FETCH_SHOPIFY_API_SUCCESS,
  FETCH_SHOPIFY_API_FAIL
} from './const';


const fetchPageOne = () =>{
  const config = {
    url:`http://shopicruit.myshopify.com/products.json?page=1`,
    method:'get'
  }
  return axios.request(config);
}

const fetchPageTwo = () => {
  const config = {
    url:`http://shopicruit.myshopify.com/products.json?page=2`,
    method:'get'
  }
  return axios.request(config);
}

const fetchPageThree = () => {
  const config = {
    url:`http://shopicruit.myshopify.com/products.json?page=3`,
    method:'get'
  }
  return axios.request(config);

}

const fetchPageFour = () => {
  const config = {
    url:`http://shopicruit.myshopify.com/products.json?page=4`,
    method:'get'
  }
  return axios.request(config);
}

const fetchPageFive = () => {
  const config = {
    url:`http://shopicruit.myshopify.com/products.json?page=5`,
    method:'get'
  }
  return axios.request(config);
}

export function fetchAllData(){
  return (dispatch)=>{
     Promise.all([
      fetchPageOne(),
      fetchPageTwo(),
      fetchPageThree(),
      fetchPageFour(),
      fetchPageFive()
    ])
    .then(res=>{
      //concat products to one array []
      let promiseArr = [];
      res.map(products =>{
        promiseArr.push(products.data.products)
      })
      let flattenArray = _.flatten(promiseArr);
      dispatch({
        type:FETCH_SHOPIFY_API_SUCCESS,
        payload:flattenArray
      })
    })
  }
}
