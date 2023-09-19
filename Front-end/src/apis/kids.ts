import axios from "axios";
axios.defaults.withCredentials = true;

const serverURL = process.env.REACT_APP_SERVER_URL;

export const childRegistration = async () => {
  console.log("ok");
};
