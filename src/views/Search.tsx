import React, { useState } from 'react';
import DataService from '../common/dataService'
import Kurals from '../components/Kurals';
import {
    Link
} from "react-router-dom";
import { IKural } from '../common/interfaces';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Search = (props: any) => {

    const [dataError, setDataError] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([] as IKural[]);

    const handleSearchTextChange = (event: any) => {
        setSearchText(event.target.value);
        console.log(searchText);
    }

    const searchEnglish = () => {
        console.log("searching...");
        if (searchText) {
            DataService.searchEnglish(searchText).then(
                result => {
                    console.log(result);
                    setData(result.data.Data);
                    setIsLoaded(true);
                },
                error => {
                    console.log("error occurred");
                    setDataError(error);
                    setIsLoaded(true);
                }
            )
        }
    }

    if (dataError) {
        return <div>Error: {dataError}</div>;
    } else {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col className="col-lg-12 form-group">
                                    <Row>
                                        <Col className="col-md-10">
                                            <input type="text" placeholder="நட்பு உள்ள குறள் தேட, Natpu டைப் செய்து ஸ்பேஸ்பார் அழுத்துங்கள்"
                                                id="transliterateTextarea" className="form-control" onChange={handleSearchTextChange}
                                            />
                                        </Col>
                                        <Col className="col-md-2">
                                            <input type="button" className="btn btn-primary form-control" onClick={searchEnglish}
                                                value="தேடு" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="col-md-3">
                                            <label className="radio-inline"><input type="radio" name="searchType"
                                                value="Contains" />உள்ள குறள்</label>
                                        </Col>
                                        <Col className="col-md-3">
                                            <label className="radio-inline"><input type="radio" name="searchType" value="StartsWith"
                                            />தொடங்கும் குறள்</label>
                                        </Col>
                                        <Col className="col-md-6">
                                            <label className="radio-inline"> <input type="radio" name="searchType" value="EndsWith"
                                            />முடியும் குறள்</label>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>

                <Kurals thirukkurals={data} />
            </>

        )
    }
}

export default Search;