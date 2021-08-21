import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dating-app-backend1.herokuapp.com/',
});

export default instance;