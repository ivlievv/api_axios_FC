import axios from 'axios';

const baseUrl = 'http://192.168.0.106:3000/api';

axios.interceptors.request.use( function (config) {
  config.headers['authorization'] = '6';
  return config;
}, function (error) {
  return Promise.reject( error );
} );

/**
 * send request to create Task instance
 * @param task
 * @return {Promise<AxiosResponse<T>>}
 */
export async function createTask (task) {
  return axios.post( `${baseUrl}/task`, task );
}

/**
 *
 * @return {Promise<AxiosResponse<T>>}
 */
export async function getUserTasks () {
  return axios.get( `${baseUrl}/tasks` );
}

export async function updateTaskById (id, data) {
  return axios.put( `${baseUrl}/task/${id}`, data );
}