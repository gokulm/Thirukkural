import { Fragment, useContext, useEffect, useState } from 'react';
import DataService from '../common/DataService'
import { Link } from "react-router-dom";
import { ISection } from '../common/interfaces';
import { Card, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../common/app-context';

const Sections = (props: any) => {
    const [data, setData] = useState([] as ISection[]);
    const [dataError, setDataError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { t } = useTranslation();
    const appContext = useContext(AppContext)

    useEffect(() => {
        DataService.getSections().then(
            result => {
                // console.log(result);
                setData(result.data.Data as ISection[])
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
                        data.map((section, index) => (
                            <Fragment key={index}>
                                <Card>
                                    <Card.Body>
                                        <div>
                                            <div className="panel panel-default">
                                                <div className="panel-body">
                                                    <div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">#</span>: {section.Index}
                                                    </div>
                                                    <div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">{t('ChapterInTamil')}</span>: {section.Tamil}
                                                    </div>
                                                    {!appContext.IsTamil && <><div className="adhigaramProperty">
                                                        <span className="brand adhigaramPropertyHeading">{t('Chapter')}</span>: {section.English}
                                                    </div>
                                                        <div className="adhigaramProperty">
                                                            <span className="brand adhigaramPropertyHeading">{t('ChapterTransliteration')}</span>: {section.Transliteration}
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
                            data.map((section, index) => (
                                <tr key={index}>
                                    <td className="col-md-1">{section.Index}</td>
                                    <td className="col-md-3"> {section.Tamil} </td>
                                    {!appContext.IsTamil && <><td className="col-md-3"> {section.English} </td>
                                        <td className="col-md-3"> {section.Transliteration} </td></>
                                    }
                                    <td className={appContext.IsTamil ? "col-md-8" : "col-md-2"}>
                                        <Link to={`/sections/${section.Index}/chapters`}>{t('Chapters')}</Link>
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

export default Sections;

{/* <table class="table table-bordered table-striped tableThirukkural visible-md visible-sm visible-lg">
        <thead>
        <th>#</th>
        <th><span class="brand" i18n="common.SectionInTamil"></span></th>
        <th><span class="brand" i18n="common.Section"></span></th>
        <th><span class="brand" i18n="common.SectionTransliteration"></span></th>
        <th></th>
        </thead>
        <tr ng-repeat="thirukkuralSection in vm.ThirukkuralSections">
            <td class="col-md-1"> {{ ::thirukkuralSection.Index }}</td>
            <td class="col-md-3"> {{ ::thirukkuralSection.Tamil }} </td>
            <td class="col-md-3"> {{ ::thirukkuralSection.English }} </td>
            <td class="col-md-3"> {{ ::thirukkuralSection.Transliteration }} </td>
            <td class="col-md-8"> <a ui-sref="sectionchapters( { index: thirukkuralSection.Index })"><span class="brand" i18n="common.Chapters"></span></a> </td>
        </tr>
    </table> */}