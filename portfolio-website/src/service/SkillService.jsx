import API from "../api/axiosConfig";

export const getSkills = () => {
    return API.get("/api/getSkill");
};