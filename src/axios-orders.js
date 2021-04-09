import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-house-507bf-default-rtdb.firebaseio.com/'
});

export default instance;