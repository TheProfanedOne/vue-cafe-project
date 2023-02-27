import axios from 'axios';

const API_URL = '/backend';

export function retrieveMenu(category: string) {
    return axios.get(`${API_URL}/read_menu.php`, {
        params: {
            cat_name: category,
        },
    });
}

const mds = { retrieveMenu };
export default mds;
