import axios from "axios";
import {URL} from "../URL";
const token = localStorage.getItem("token");

export default axios.create({
    // baseURL: "https://bookingvaccine.herokuapp.com:443/api/v1"
    baseURL: `${URL}`,
    headers: {'Authorization': 'Bearer '+token}
});