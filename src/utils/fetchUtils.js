/**
 * React Native App
 * https://github.com/ztplz/CNode-react-native
 * email: mysticzt@gmail.com
 */

// import TIME_OUT from '../constants/timeout';

import Toast from 'react-native-root-toast';

function getMethod() {
  return {
   method: 'GET',
 };
}

function postMethod(params) {
  return {
    method: 'post',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }
}

function timeoutPromise(ms, promise) {
  console.log('timeoutPromise');
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('FETCH_TIME_OUT'));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timer);
        resolve(res);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  })
}

export function getFetch(ms, url) {
  console.log(url);
  console.log(ms);
  return new Promise((resolve, reject) => {
    timeoutPromise(ms, fetch(url, getMethod()))
      .then(response => {
        console.log('fetchHomePageData qqqqqq');
        console.log(response);
        console.log(response.status);
        if(response.ok) {
          console.log('fetch success fetutil');
          console.log(response);
          return response.json();
        } else {
          Toast.show('数据返回错误，请重试', {position: 80});
          return Promise.reject(new Error('FETCH_ERROR'));
        }
      })
      .then(json => resolve(json.data))
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

export function postFetch(ms, url, params) {
  return new Promise((resolve, reject) => {
    timeoutPromise(ms, fetch(url, postMethod(params)))
      .then(response => {
        console.log(response);
        if(response.ok) {
          return response.json();
        } else {
          // console.log('124544411125');
          // Toast.show('数据返回错误，请重试', {position: 80});
          // reject(new Error('FETCH_ERROR'));
          return Promise.reject(new Error('FETCH_ERROR'));
        }
      })
      .then(json => {
        console.log('json');
        if(json.success == true) {
          resolve(json);
        } else {
          return Promise.reject(new Error('POST_RETURN_FALSE'));
        }
      })
      .catch(error=> {
        console.log(error);
        reject(error);
      });
  });
}
