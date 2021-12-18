import { IChapter, IKural } from '../common/interfaces';
import { useContext } from 'react';
import { AppContext } from '../common/app-context';
import Kural from './Kural';

interface IProps {
    thirukkurals: IKural[],
    chapter?: IChapter,
    searchText?: string
}

const Kurals = (props: IProps) => {
    const appContext = useContext(AppContext)

    const getTitle = () => {
        if (!props.chapter) {
            return ""
        }
        console.log("chapter: ", props.chapter);

        if (appContext.IsTamil) {
            return `${props.chapter.Index}. ${props.chapter.Tamil}`;
        }
        else {
            return `${props.chapter.Index}. ${props.chapter.English}/${props.chapter.Transliteration}`;
        }
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