import axios from "axios";

const Api = axios.create({
    baseURL:"http://10.133.46.35:3000",
});

export default Api;