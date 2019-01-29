const API_PATH = 'http://localhost:3000'

import axios from 'axios'
class WrapBMonsterServiceClass {
  studio() {
    return axios.get(`${API_PATH}/api/studios`);
  }
  course() {
    return axios.get(`${API_PATH}/api/courses`);
  }
  lesson(params) {
    return axios.get(`${API_PATH}/api/lessons`, {
      params
    });
  }
}
export default new WrapBMonsterServiceClass()
