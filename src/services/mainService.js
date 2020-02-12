import myData from '../sample.json';
class MainService {
    async getList() {
        
        return await Object.values(myData);
    }
}

export default new MainService();