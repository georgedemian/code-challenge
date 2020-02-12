
class MainService {
    async getList() { 
       const response = await fetch('/sample.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        const json = await response.json();

        return json
    }
}

export default new MainService();