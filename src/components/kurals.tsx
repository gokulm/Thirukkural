import { IChapter, IKural } from '../common/interfaces';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import i18n from '../common/i18n';

interface IProps {
    thirukkurals: IKural[],
    chapter: IChapter
}

const Kurals = (props: IProps) => {
    const { t } = useTranslation();

    const getTitle = () => {
        if(i18n.language === 'tamil')
        {
            return `${props.chapter.Index}. ${props.chapter.Tamil}`;
        }
        else
        {
            return `${props.chapter.Index}. ${props.chapter.English}/${props.chapter.Transliteration}`;
        }
    }

    return (
        <div>
            <div className="thirukurralChapterHeader">
                <h4 className="thirukurralChapterHeaderText">{ getTitle() }</h4>
            </div>
            {
                props.thirukkurals.map(thirukkural => (
                    <div key={thirukkural.Index}>
                        <Card >
                            <Card.Body>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('Kural')} {thirukkural.Index}:</div>
                                    <div dangerouslySetInnerHTML={{ __html: thirukkural.Tamil }} />
                                </div>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('MuVaExplanation')}:</div>
                                    <div>{thirukkural.MuVaUrai}</div>
                                </div>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('SolomonPaapaiyaExplanation')}:</div>
                                    <div>{thirukkural.SolomonPaapaiyaUrai}</div>
                                </div>
                                <div className="kuralProperty">
                                    <div className="kuralPropertyHeading">{t('KalaignarExplanation')}:</div>
                                    <div>{thirukkural.KalaignarUrai}</div>
                                </div>
                                {
                                    i18n.language === 'english' && <> <div className="kuralProperty">
                                        <div className="kuralPropertyHeading">{t('Couplet')}:</div>
                                        <div dangerouslySetInnerHTML={{ __html: thirukkural.English }} />
                                    </div>
                                        <div className="kuralProperty" ng-hide="layout.IsTamil()">
                                            <div className="kuralPropertyHeading">{t('EnglishExplanation')}:</div>
                                            <div>{thirukkural.EnglishMeaning}</div>
                                        </div>
                                        <div className="kuralProperty" ng-hide="layout.IsTamil()">
                                            <div className="kuralPropertyHeading">{t('Transliteration')}:</div>
                                            <div dangerouslySetInnerHTML={{ __html: thirukkural.TamilTransliteration }} />
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