import API from "../api/axiosConfig";

export const sendEmail = async (emailData) => {

    return await API.post("/api/sendmail", emailData);

};