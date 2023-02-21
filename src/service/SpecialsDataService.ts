import axios from 'axios';

const API_URL = '/backend';

class SpecialsDataService {
    retrieveDailySpecial(dayName: string) {
        return axios.get(`${API_URL}/read_special.php`, {
            params: {
                spec_day: dayName,
            },
        });
    }
}

const sds = new SpecialsDataService();
export default sds;
