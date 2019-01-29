const API_PATH = 'http://localhost:3000'

import axios from 'axios'
class WrapBMonsterServiceClass {
  studio() {
    return axios.get(`${API_PATH}/api/studios`);
  }
  // current(city) {
  //   const params = {
  //     units: 'metric',
  //     lang: 'jp',
  //     q: city
  //   }
  //   return axios.get(`${API_PATH}/weather`, {
  //     params
  //   });
  // }
  lesson(params) {
    return axios.get(`${API_PATH}/api/lessons`, {
      params
    });
    // return axios.get(`${API_PATH}/forecast/daily`, {
    //   params
    // });
  }
}
export default new WrapBMonsterServiceClass()
