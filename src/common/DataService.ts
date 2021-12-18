import axios from 'axios';

class DataService {
    static getThirukkurals(chapterIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/${chapterIndex}/thirukkurals`);
    }

    static getThirukkural(kuralIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkurals/${kuralIndex}`);
    }

    static getChapters() {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/`);
    }

    static getSections() {
        return axios.get(`https://api.gokulnath.com/thirukkuralsections/`);
    }

    static getSection(sectionIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkuralsections/${sectionIndex}`);
    }

    static getSectionChapters(sectionIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkuralsections/${sectionIndex}/chapters`);
    }

    static getChapter(chapterIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchapters/${chapterIndex}`);
    }

    static getChapterGroups() {
        return axios.get(`https://api.gokulnath.com/thirukkuralchaptergroups/`);
    }

    static getChapterGroup(chapterGroupIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchaptergroups/${chapterGroupIndex}`);
    }

    static getChapterGroupsChapters(chapterGroupIndex: any) {
        return axios.get(`https://api.gokulnath.com/thirukkuralchaptergroups/${chapterGroupIndex}/chapters`);
    }

    static searchTamil(searchText: string, searchType: string = "Contains") {
        switch (searchType) {
            case "StartsWith":
                return axios.get(`https://api.gokulnath.com/thirukkuralsstartswith/${searchText}`);
            case "EndsWith":
                return axios.get(`https://api.gokulnath.com/thirukkuralsendswith/${searchText}`);
            default:
                return axios.get(`https://api.gokulnath.com/thirukkuralstamilsearch/${searchText}`);
        }
    }

    static searchEnglish(searchText: string) {
        return axios.get(`https://api.gokulnath.com/thirukkuralsenglishsearch/${searchText}`);
    }
}

export default DataService;