import { Fragment, useContext, useEffect, useState } from 'react';
import DataService from '../common/DataService'
import { Link } from "react-router-dom";
import { IChapterGroup, ISection } from '../common/interfaces';
import { Card, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../common/app-context';

const ChapterGroups = (props: any) => {
    const [data, setData] = useState([] as IChapterGroup[]);
    const [dataError, setDataError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();
    const appContext = useContext(AppContext)

    useEffect(() => {
        DataService.getChapterGroups().then(
            result => {
                // console.log(result);
                setData(result.data.Data as IChapterGroup[])
                setIsLoaded(true);
            },
            error => {
                console.log("error occurred");
                setDataError(error);
                setIsLoaded(true);
            });
    },[DataService]);

    if (dataError) {
        return <div>Error: {dataError}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div className="d-block d-sm-block d-md-none">
                    {
                        data.map((chapterGroup, index) => (
                            <Fragment key={index}>
                                <Card>
                                    <Card.Body>
                                        <div>
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">#</span>: {chapterGroup.Index}
                                                    </div>
                                                    <div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">{t('ChapterInTamil')}</span>: {chapterGroup.Tamil}
                                                    </div>
                                                    {!appContext.IsTamil && <><div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">{t('Chapter')}</span>: {chapterGroup.English}
                                                    </div>
                                                        <div className="adhigaramProperty">
                                                            <span className="brand adhigaramPropertyHeading">{t('ChapterTransliteration')}</span>: {chapterGroup.Transliteration}
                                                        </div></>
                                                    }
                                                    <div className="adhigaramProperty">
                                                        {/* <a ui-sref="thirukkuralsbychapters( { index: thirukkuralChapter.Index })"><span className="brand"></span></a> */}
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
                            <th>{t("SectionInTamil")}</th>
                            {!appContext.IsTamil && <><th>{t("Section")}</th>
                                <th>{t("SectionTransliteration")}</th></>}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((chapterGroup, index) => (
                                <tr key={index}>
                                    <td className="col-md-1">{chapterGroup.Index}</td>
                                    <td className="col-md-3"> {chapterGroup.Tamil} </td>
                                    {!appContext.IsTamil && <><td className="col-md-3"> {chapterGroup.English} </td>
                                        <td className="col-md-3"> {chapterGroup.Transliteration} </td></>
                                    }
                                    <td className={appContext.IsTamil ? "col-md-8" : "col-md-2"}>
                                        <Link to={`/chaptergroups/${chapterGroup.Index}/chapters`}>{t('Chapters')}</Link>
                                    </td>
                                </tr>
                            )
                            )}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default ChapterGroups;