
const imageStore = (image_name: String) => {
    return image_name
        ? `${import.meta.env.VITE_TESTING_STORAGE}${image_name}`
        : null;
} 

export default imageStore;