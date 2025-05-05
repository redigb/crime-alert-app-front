import axios from '../config/axios';


export const loginRequest = async(username: String, password: String) => {
    return axios.post('/login', {
        username,
        password
    });
}

export const profileRequest = async () =>{
    return await axios.get('/profile');
}