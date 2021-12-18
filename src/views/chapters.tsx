import { Fragment, useContext, useEffect, useState } from 'react';
import DataService from '../common/DataService'
import { Link, useParams } from "react-router-dom";
import { IChapter, ISection } from '../common/interfaces';
import { Card, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../common/app-context';

interface RouteParams {
    sectionIndex?: string
}

const Chapters = (props: any) => {
    const [data, setData] = useState([] as IChapter[]);
    const [section, setSection] = useState({} as ISection);
    const [dataError, setDataError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();
    const appContext = useContext(AppContext);
    const routeParams = useParams<RouteParams>();

    useEffect(() => {
        console.log("chapters useeffect");
        let sectionIndex = routeParams.sectionIndex;
        if (!sectionIndex) {
            DataService.getChapters().then(
                result => {
                    // console.log(result);
                    setData(result.data.Data as IChapter[])
                    setIsLoaded(true);
                },
                error => {
                    console.log("error occurred");
                    setDataError(error);
                    setIsLoaded(true);
                });
        }
        else {
            DataService.getSectionChapters(sectionIndex).then(
                result => {
                    // console.log(result);
                    setData(result.data.Data as IChapter[])
                    setIsLoaded(true);
                },
                error => {
                    console.log("error occurred");
                    setDataError(error);
                    setIsLoaded(true);
                });

            DataService.getSection(sectionIndex).then(
                result => {
                    setSection(result.data.Data as ISection)
                    setIsLoaded(true);
                },
                error => {
                    console.log("error occurred");
                    setDataError(error);
                    setIsLoaded(true);
                });
        }
    }, [DataService, routeParams]);

    const getTitle = () => {
        if (!section) {
            return ""
        }

        if(!section.Index){
            return ""
        }

        console.log("section: ", section);

        if (appContext.IsTamil) {
            return `${section.Index}. ${section.Tamil}`;
        }
        else {
            return `${section.Index}. ${section.English}/${section.Transliteration}`;
        }
    }

    if (dataError) {
        return <div>Error: {dataError}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div className="thirukurralChapterHeader">
                    <h4 className="thirukurralChapterHeaderText">{getTitle()}</h4>
                </div>
                <div className="d-block d-sm-block d-md-none">
                    {
                        data.map((chapter, index) => (
                            <Fragment key={index}>
                                <Card>
                                    <Card.Body>
                                        <div>
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">#</span>: {chapter.Index}
                                                    </div>
                                                    <div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">{t('ChapterInTamil')}</span>: {chapter.Tamil}
                                                    </div>
                                                    {!appContext.IsTamil && <><div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">{t('Chapter')}</span>: {chapter.English}
                                                    </div>
                                                        <div className="adhigaramProperty">
                                                            <span className="brand adhigaramPropertyHeading">{t('ChapterTransliteration')}</span>: {chapter.Transliteration}
                                                        </div></>
                                                    }
                                                    <div className="adhigaramProperty">
                                                        <Link to={`/chapters/${chapter.Index}/kurals`}>{t('Kurals')}</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Fragment>
                        ))
                    }
                </div>
                <Table striped bordered hover className="d-none d-md-block d-lg-block">
                    <thead className="tableThirukkuralThead">
                        <tr>
                            <th>#</th>
                            <th>அதிகாரம்</th>
                            {!appContext.IsTamil && <><th>Chapter</th>
                                <th>Adhigaaram</th></>}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((chapter, index) => (
                                <tr key={index}>
                                    <td className="col-md-1">{chapter.Index}</td>
                                    <td className="col-md-3"> {chapter.Tamil} </td>
                                    {!appContext.IsTamil && <><td className="col-md-3"> {chapter.English} </td>
                                        <td className="col-md-3"> {chapter.Transliteration} </td></>
                                    }
                                    <td className={appContext.IsTamil ? "col-md-8" : "col-md-2"}>
                                        <Link to={`/chapters/${chapter.Index}/kurals`}>{t('Kurals')}</Link>
                                    </td>
                                </tr>
                            )
                            )}
                    </tbody>
                </Table>
                <br />
            </>
        );
    }
}

export default Chapters;