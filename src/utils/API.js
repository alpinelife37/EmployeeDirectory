import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
    // return axios.get("http://localhost:4000/api/?results=200&nat=us");
  }
};
