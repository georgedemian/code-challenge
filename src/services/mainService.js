import axios from 'axios';

class MainService {
    getList() {
        return axios
            .get(GospopService.baseURL + 'global/sports', {
                headers: {
                    Authorization: AuthService.getAuthId(),
                },
            })
            .then(response => response.data)
            .catch(error => error);
    }
}

export default new MainService();