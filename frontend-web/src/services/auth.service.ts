import axios from './config/axios';


export const loginRequest = async (email: String, password: String) => {
    return axios.post('/auth/login', {
        email,
        password
    });
}


export const logoutRequest = async () => {
    return axios.post('/auth/logout');
};


export const registerUser = async (data: {
    name: string;
    email: string;
    telefono: string;
    password: string;
}) => {
    return await axios.post('/auth/register', data);
};