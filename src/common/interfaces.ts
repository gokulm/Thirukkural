export interface IAppContext {
    IsTamil: boolean
}

export interface IChapter {
    Index: number,
    Tamil: string,
    English: string,
    Transliteration: string
}

export interface ISection extends IChapter {
}

export interface IChapterGroup extends IChapter {
}

export interface IKural {
    Index: number,
    Tamil: string,
    KalaignarUrai: string,
    MuVaUrai: string,
    SolomonPaapaiyaUrai: string,
    English: string,
    EnglishMeaning: string,
    TamilTransliteration: string
}
