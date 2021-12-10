import { IChapter, IKural } from '../common/interfaces';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { AppContext } from '../common/app-context';

interface IProps {
    thirukkurals: IKural[],
    chapter?: IChapter,
    searchText?: string
}

const Kurals = (props: IProps) => {
    const { t } = useTranslation();
    const appContext = useContext(AppContext)

    const getTitle = () => {
        if (!props.chapter) {
            return ""
        }

        if (appContext.IsTamil) {
            return `${props.chapter.Index}. ${props.chapter.Tamil}`;
        }
        else {
            return `${props.chapter.Index}. ${props.chapter.English}/${props.chapter.Transliteration}`;
        }
    }

    const getHighlightedText = (text: string, highlight: string = "", replaceLineBreak: boolean = false) => {

        if (!replaceLineBreak && !highlight)
            return text;

        // replace <br /> with \n and textWithLineBreak css will replace \n with an actual line break
        if(replaceLineBreak)
        {
            text = text.replace("<br />", "\n");
            if (!highlight)
                return text;
        }

        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span> {parts.map((part, i) =>
            <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { backgroundColor: 'yellow' } : {}}>
                {part}
            </span>)
        } </span>;
    }

    return (
        <div>
            <div className="thirukurralChapterHeader">
                <h4 className="thirukurralChapterHeaderText">{getTitle()}</h4>
            </div>
            {
                props.thirukkurals.map(thirukkural => (
                    <div key={thirukkural.Index}>
                        <Card >
                            <Card.Body>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('Kural')} {thirukkural.Index}:</div>
                                    {/* <div dangerouslySetInnerHTML={{ __html: thirukkural.Tamil }} /> */}
                                    <div className="textWithLineBreak">{getHighlightedText(thirukkural.Tamil, props.searchText, true)}</div>
                                </div>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('MuVaExplanation')}:</div>
                                    <div>{getHighlightedText(thirukkural.MuVaUrai, props.searchText)}</div>
                                </div>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('SolomonPaapaiyaExplanation')}:</div>
                                    <div>{getHighlightedText(thirukkural.SolomonPaapaiyaUrai, props.searchText)}</div>
                                </div>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('KalaignarExplanation')}:</div>
                                    <div>{getHighlightedText(thirukkural.KalaignarUrai, props.searchText)}</div>
                                </div>
                                {
                                    !appContext.IsTamil && <> <div className="kuralProperty">
                                        <div className="kuralPropertyHeading">{t('Couplet')}:</div>
                                        <div className="textWithLineBreak">{getHighlightedText(thirukkural.English, props.searchText, true)}</div>
                                    </div>
                                        <div className="kuralProperty" ng-hide="layout.IsTamil()">
                                            <div className="kuralPropertyHeading">{t('EnglishExplanation')}:</div>
                                            <div>{getHighlightedText(thirukkural.EnglishMeaning, props.searchText)}</div>
                                        </div>
                                        <div className="kuralProperty" ng-hide="layout.IsTamil()">
                                            <div className="kuralPropertyHeading">{t('Transliteration')}:</div>
                                            <div className="textWithLineBreak">{getHighlightedText(thirukkural.TamilTransliteration, props.searchText, true)}</div>
                                        </div></>
                                }
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))
            }
        </div>
    )
}

export default Kurals;