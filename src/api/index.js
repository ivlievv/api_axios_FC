import axios from 'axios';

export const BASE_URL = 'http://192.168.0.106:3000/api';

axios.interceptors.request.use( function (config) {

  return config;
}, function (error) {
  return Promise.reject( error );
} );

axios.interceptors.response.use( null, error => {

  alert( 'Error' );
  switch (401) {
    case 401:
      console.log( '401 error' );
      break;
  }
  return Promise.reject( error );
} );
