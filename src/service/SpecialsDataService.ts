import axios from 'axios';

const API_URL = '/backend';

export function retrieveSpecial(dayName: string) {
    return axios.get(`${API_URL}/read_special.php`, {
        params: {
            spec_day: dayName,
        },
    });
}

const sds = { retrieveSpecial };
export { sds as default };
