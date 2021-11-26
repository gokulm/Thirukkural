import { IKural } from '../common/interfaces';
import { useTranslation } from 'react-i18next';
import resources from '../assets/resources';
import { Card } from 'react-bootstrap';

interface IProps {
    thirukkurals: IKural[]
}

const Kurals = (props: IProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <br />
            {
                props.thirukkurals.map(thirukkural => (
                    <>
                    <Card>
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
                            <div className="kuralProperty" ng-hide="layout.IsTamil()">
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
                            </div>
                        </Card.Body>
                    </Card>
                    <br />
                    </>
                ))
            }
        </div>
    )
}

export default Kurals;