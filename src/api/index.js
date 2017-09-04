import axios from 'axios';
import {API_ROOT} from '../config';

axios.defaults.baseURL = API_ROOT;

// 请求方法
export default {
  OK: '200',
  getTest() {
    return axios.get('/index');
  },
  getPost(pid) {
    return axios.get('/p/' + pid);
  },
  // 网络失败
  consoleLogNetErrorMessage() {
    console.log('%c请求网络失败：', 'display: block;padding: 2px;padding-left:10px;padding-right:10px;background: red;color:#fafafa;font-size: 13px;border-radius: 4px;');
  },
  // response 不是 200
  consoleLogResponseMessage(error) {
    console.log('%c请求有错误信息：' + error.message, 'display: block;padding: 2px;padding-left:10px;padding-right:10px;background: blue;color:#fafafa;font-size: 13px;border-radius: 4px;');
  }
};
