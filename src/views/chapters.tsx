import React, { useEffect, useState } from 'react';
import DataService from '../common/dataService'
import { Link } from "react-router-dom";
import { IChapter } from '../common/interfaces';
import { Table } from 'react-bootstrap';

// interface IChapter {
//     Index: number,
//     Tamil: string,
//     English: string,
//     Transliteration: string
// }

const Chapters = (props: any) => {
    const [data, setData] = useState([] as IChapter[]);
    const [dataError, setDataError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

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
            <Table striped bordered hover>
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
                    data.map(thirukkural => (
                        <tr>
                            <td className="col-md-1">{thirukkural.Index}</td>
                            <td className="col-md-3"> {thirukkural.Tamil} </td>
                            <td className="col-md-3"> {thirukkural.English} </td>
                            <td className="col-md-3"> {thirukkural.Transliteration} </td>
                            <td className="col-md-2">
                                <Link to={`/chapters/${thirukkural.Index}/kurals`}>Kurals</Link>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>
            // <table className="table table-bordered table-striped tableThirukkural visible-md visible-sm visible-lg">
            //     <thead>
            //         <th>#</th>
            //         <th>அதிகாரம்</th>
            //         <th>Chapter</th>
            //         <th>Adhigaaram</th>
            //         <th></th>
            //     </thead>
            //     {
            //         data.map(thirukkural => (
            //             <tr>
            //                 <td className="col-md-1">{thirukkural.Index}</td>
            //                 <td className="col-md-3"> {thirukkural.Tamil} </td>
            //                 <td className="col-md-3"> {thirukkural.English} </td>
            //                 <td className="col-md-3"> {thirukkural.Transliteration} </td>
            //                 <td className="col-md-2">
            //                     <Link to={`/chapters/${thirukkural.Index}/kurals`}>Kurals</Link>
            //                 </td>
            //             </tr>
            //         )
            //         )}
            // </table>
        );
    }
}

export default Chapters;