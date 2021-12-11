import { IChapter, IKural } from '../common/interfaces';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { useContext } from 'react';
import { AppContext } from '../common/app-context';
import Kural from './Kural';

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
                    <Kural kural={thirukkural} chapter={props.chapter} searchText={props.searchText} />
                ))
            }
        </div>
    )
}

export default Kurals;