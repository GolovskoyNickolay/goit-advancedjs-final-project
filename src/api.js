import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const api = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 409) {
      const serverMessage = error.response.data?.message || 'Subscription already exists';

      iziToast.error({
        title: 'Subscription Error',
        message: serverMessage,
        position: 'topRight',
      });

      return { data: null };
    } else {
      console.error(error);
      iziToast.error({
        title: 'Request Error',
        message: error?.message,
        position: "topRight"
      });

      return { data: null };
    }
  }
);

export default api;
