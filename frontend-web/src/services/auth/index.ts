import axios from '../config/axios';


export const loginRequest = async(email: String, password: String) => {
    return axios.post('/login', {
        email,
        password
    });
}

export const profileRequest = async () =>{
    return await axios.get('/profile');
}