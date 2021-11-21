import axios from 'axios';

class DataService {
    getThirukkurals(chapterIndex) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/${chapterIndex}/thirukkurals`);
    }

    static getChapters() {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/`);
    }

    searchEnglish(searchText) {
        return axios.get(`https://api.gokulnath.com/thirukkuralsenglishsearch/${searchText}`);
    }


}

export default DataService;