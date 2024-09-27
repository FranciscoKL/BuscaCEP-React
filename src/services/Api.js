import axios from "axios";


const api = axios.create({
    URL: "https://viacep.com.br/ws/"
});

export default api;