import axios from 'axios';
import { server_base_url } from './index'

const uri = server_base_url // production URI
const Axios = axios.create({ baseURL: uri });
export default Axios;
