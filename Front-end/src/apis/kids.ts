// Type
import { TuserKidsRegist } from "../utils/type";

import axios from "axios";
axios.defaults.withCredentials = true;

const serverURL = process.env.REACT_APP_SERVER_URL;

export const childRegistration = async (data: TuserKidsRegist) => {
  const result = await axios.post(`${serverURL}/user/kid`, data);

  return result.data;
};
