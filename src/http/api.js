import axios from 'axios'
import store from '../store'
import router from '../router'

const api = axios.create();
api.defaults.baseURL = 'http://116.62.16.67:8285/';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
export default api
