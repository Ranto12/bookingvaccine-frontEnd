import axios from "axios";

export default axios.create({
    baseURL: "http://35.247.142.238:80/api/v1"
});