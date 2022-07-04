import axios from "axios";
import {URL} from "../URL";

export default axios.create({
    // baseURL: "https://bookingvaccine.herokuapp.com:443/api/v1"
    baseURL: `${URL}`
});