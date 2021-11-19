import axios from "axios";

const API_URL = "http://localhost:4000/user/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, dateOfBirth, address, state, country, city, phoneNumber, userName, password) {
    return axios.post(API_URL + "register", {
      firstName, lastName, dateOfBirth, address, state, country, city, phoneNumber, userName, password
    });
  }
}

export default new AuthService();
