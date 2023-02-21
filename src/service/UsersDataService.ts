import axios from 'axios';

const API_URL = '/backend';

export type User = {
    first_name: string;
    last_name: string;
    email: string;
    pass: string;
};

class UsersDataService {
    userLookup(email: string) {
        return axios.get(`${API_URL}/user_lookup.php`, {
            params: {
                email: email,
            },
        });
    }

    createUser(user: User) {
        return axios.post(`${API_URL}/create_user.php`, user);
    }
}

const uds = new UsersDataService();
export default uds;
