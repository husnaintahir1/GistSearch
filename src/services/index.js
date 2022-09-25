import axios from "axios";

class GistServices {


  searchUser(username) {
    return axios.get(`https://api.github.com/users/${username}/gists`);
        

  }
  getForkList(url) {
    return axios.get(`${url}`);
  }
}

export default new GistServices();