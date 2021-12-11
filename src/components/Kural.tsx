import { IChapter, IKural } from '../common/interfaces';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { AppContext } from '../common/app-context';
import { Link } from 'react-router-dom';

interface IProps {
    kural: IKural,
    chapter?: IChapter,
    searchText?: string,
    displayChapter?: boolean
}

const Kural = (props: IProps) => {
    const { t } = useTranslation();
    const appContext = useContext(AppContext);

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
        if (replaceLineBreak) {
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
            {
                props.displayChapter && <div className="thirukurralChapterHeader">
                    <h4 className="thirukurralChapterHeaderText">{getTitle()}</h4>
                </div>
            }
            <div key={props.kural.Index}>
                <Card >
                    <Card.Body>
                        <div className="kuralProperty">
                            <div className="kuralPropertyHeading">{t('Kural')} {props.kural.Index}:</div>
                            <div className="textWithLineBreak">{getHighlightedText(props.kural.Tamil, props.searchText, true)}</div>
                        </div>
                        <div className="kuralProperty">
                            <div className="kuralPropertyHeading">{t('MuVaExplanation')}:</div>
                            <div>{getHighlightedText(props.kural.MuVaUrai, props.searchText)}</div>
                        </div>
                        <div className="kuralProperty">
                            <div className="kuralPropertyHeading">{t('SolomonPaapaiyaExplanation')}:</div>
                            <div>{getHighlightedText(props.kural.SolomonPaapaiyaUrai, props.searchText)}</div>
                        </div>
                        <div className="kuralProperty">
                            <div className="kuralPropertyHeading">{t('KalaignarExplanation')}:</div>
                            <div>{getHighlightedText(props.kural.KalaignarUrai, props.searchText)}</div>
                        </div>
                        {
                            !appContext.IsTamil && <> <div className="kuralProperty">
                                <div className="kuralPropertyHeading">{t('Couplet')}:</div>
                                <div className="textWithLineBreak">{getHighlightedText(props.kural.English, props.searchText, true)}</div>
                            </div>
                                <div className="kuralProperty" ng-hide="layout.IsTamil()">
                                    <div className="kuralPropertyHeading">{t('EnglishExplanation')}:</div>
                                    <div>{getHighlightedText(props.kural.EnglishMeaning, props.searchText)}</div>
                                </div>
                                <div className="kuralProperty" ng-hide="layout.IsTamil()">
                                    <div className="kuralPropertyHeading">{t('Transliteration')}:</div>
                                    <div className="textWithLineBreak">{getHighlightedText(props.kural.TamilTransliteration, props.searchText, true)}</div>
                                </div></>
                        }
                        <div>
                            <Link to={`/thirukkurals/${props.kural.Index}`}>Permalink</Link>
                        </div>
                    </Card.Body>
                </Card>
                <br />
            </div>
        </div>
    )
}

export default Kural;