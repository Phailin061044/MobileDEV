import userEvent from "@testing-library/user-event";
import axios from "axios";
const API_URL = "http://localhost:5000/apis/auth/";

const register = async (username, email, password) => {
  return await axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + "signin", {
    username,
    password,
  });
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;

}

const logout = () =>{ //ไม่ต้องแจ้ง server
  localStorage.removeItem("user")

}

const getCurrentUser = () =>{ //ดึง User มา
  return JSON.parse(localStorage.getItem("user"));
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
};

export default AuthService;
