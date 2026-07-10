import axios from "axios";

const API = axios.create({
    baseURL: "https://rahul-portfolio-backend-j1ap.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;