import axios from 'axios';

class DataService {
    static getThirukkurals(chapterIndex) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/${chapterIndex}/thirukkurals`);
    }

    static getChapters() {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/`);
    }

    static getChapter(chapterIndex) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/${chapterIndex}`);
    }

    searchEnglish(searchText) {
        return axios.get(`https://api.gokulnath.com/thirukkuralsenglishsearch/${searchText}`);
    }
}

export default DataService;