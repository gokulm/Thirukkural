import { useEffect, useState } from 'react';
import DataService from '../common/DataService'
import { Link } from "react-router-dom";
import { IChapter } from '../common/interfaces';
import { Card, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Chapters = (props: any) => {
    const [data, setData] = useState([] as IChapter[]);
    const [dataError, setDataError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
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
    });

    if (dataError) {
        return <div>Error: {dataError}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <div className="d-block d-sm-block d-md-none">
                {
                    data.map(chapter => (
                        <>
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
                                                <div className="adhigaramProperty">
                                                    <span className="brand adhigaramPropertyHeading">{t('Chapter')}</span>: {chapter.English}
                                                </div>
                                                <div className="adhigaramProperty">
                                                    <span className="brand adhigaramPropertyHeading">{t('ChapterTransliteration')}</span>: {chapter.Transliteration}
                                                </div>
                                                <div className="adhigaramProperty">
                                                    {/* <a ui-sref="thirukkuralsbychapters( { index: thirukkuralChapter.Index })"><span className="brand"></span></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <br />
                        </>
                    ))
                }
                </div>
                <Table striped bordered hover size="sm" className="d-none d-md-block d-lg-block">
                    <thead className="tableThirukkuralThead">
                        <tr>
                            <th>#</th>
                            <th>அதிகாரம்</th>
                            <th>Chapter</th>
                            <th>Adhigaaram</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(chapter => (
                                <tr>
                                    <td className="col-md-1">{chapter.Index}</td>
                                    <td className="col-md-3"> {chapter.Tamil} </td>
                                    <td className="col-md-3"> {chapter.English} </td>
                                    <td className="col-md-3"> {chapter.Transliteration} </td>
                                    <td className="col-md-2">
                                        <Link to={`/chapters/${chapter.Index}/kurals`}>Kurals</Link>
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

export default Chapters;