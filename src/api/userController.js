import axios        from 'axios';
import { BASE_URL } from './index.js';

export async function getUsers () {
  return axios.get( `${BASE_URL}/admin/users` );
}