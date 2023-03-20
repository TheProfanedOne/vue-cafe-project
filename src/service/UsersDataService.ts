import axios from 'axios';

const API_URL = '/backend';

interface User {
    first_name: string;
    last_name: string;
    email: string;
    pass: string;
}

export function userLookup(email: string) {
    return axios.get(`${API_URL}/user_lookup.php`, {
        params: {
            email: email,
        },
    });
}

export function createUser(user: User) {
    return axios.post(`${API_URL}/create_user.php`, user);
}

const uds = { userLookup, createUser };
export {
    uds as default,
    type User,
};

