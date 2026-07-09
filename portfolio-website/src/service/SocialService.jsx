import API from "../api/axiosConfig";

export const Links = () => {
    return API.get("/api/getSkill");
};