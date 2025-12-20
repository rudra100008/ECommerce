"use client";
import api from "../Component/axiosInterceptor";
import { useNotification } from "../Context/NotificationContext";
import { logout } from "./LoginServices";

export const fetchCurrentUser = async (success, error, router) => {
  try {
    const response = await api.get("/api/user/me");
    console.log("CurrentUser: ", response.data);
    const data = response.data;
    return data;
  } catch (err) {
    if (!err.response) {
      console.error("Network error or server not reachable:", err.message);
      error("Unable to connect to server. Please check your connection.");
      throw err;
    }
    const { message, redirectUrl } = err.response?.data;
    if (err.response.status === 401) {
      console.log("Error in UserService: ", err.reponse?.data);
      error(message);
      setTimeout(() => {
        logout(router, success);
      }, 3000);
    } else if (err.response.status === 403) {
      console.log("Error in UserService: ", err.reponse?.data);
      error(message);
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 3000);
    } else {
      error("Unexcepted error occured.");
    }
    throw err;
  }
};

export const updateUserImageAndFullName = async (
  userId,
  formDataToSend,
  error
) => {
  try {
    const response = await api.post(
      `/api/user/${userId}/userImageAndFullName`,
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response in UserService: ", response);
    return response;
  } catch (err) {
    console.log("error in UserService: ", err.response.data);
    const { message } = err.response?.data;
    if (err.response.data && err.response.status === 401) {
      error(message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } else if (err.response.data && err.response.status === 403) {
      error(message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
    throw err;
  }
};

export const revertToGooglePic = async (userId, success, error) => {
  try {
    const response = await api.get(`/api/user/${userId}/revert_to_googleImage`);
    console.log("Reponse of revert_to_googleImage: ", response.data);
    success(response.data.message);
    return response.data;
  } catch (err) {
    console.log("err in UserService: ", err.response.body);
  }
};
