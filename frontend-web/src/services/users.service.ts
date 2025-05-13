import axios from './config/axios';

export const usersList = async() =>{
    return await axios.get('/users');
}

// Falta users Active
export const profileRequest = async (name: String) => {
    return await axios.get(`/user/${name}`);
}

export const uploadProfileImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post('/user/upload-image-profile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteProfileImage = async () => {
    const formData = new FormData();
    formData.append('delete', 'true');

    return axios.post('/user/upload-image-profile', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};