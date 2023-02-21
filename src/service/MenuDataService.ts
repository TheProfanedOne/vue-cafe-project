import axios from 'axios';

const API_URL = '/backend';

class MenuDataService {
    retrieveMenuItems(category: string) {
        return axios.get(`${API_URL}/read_menu.php`, {
            params: {
                cat_name: category,
            },
        });
    }
}

const mds = new MenuDataService();
export default mds;
