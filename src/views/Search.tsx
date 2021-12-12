import { useContext, useState } from 'react';
import DataService from '../common/DataService'
import Kurals from '../components/Kurals';
import { IKural } from '../common/interfaces';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AppContext } from '../common/app-context';

const Search = (props: any) => {

    const [dataError, setDataError] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([] as IKural[]);
    const [searchType, setSearchType] = useState("Contains");
    const appContext = useContext(AppContext)

    const handleSearchTextChange = (event: any) => {
        setSearchText(event.target.value);
        console.log(searchText);
    }

    const search = () => {
        console.log("searching...");
        if (searchText) {
            if (appContext.IsTamil) {
                DataService.searchTamil(searchText, searchType).then(
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
                );
            }
            else {
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
                    });
            }
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
                                        <Col md={10}>
                                            <input type="text" placeholder="நட்பு உள்ள குறள் தேட, Natpu டைப் செய்து ஸ்பேஸ்பார் அழுத்துங்கள்"
                                                id="transliterateTextarea" className="form-control" onChange={handleSearchTextChange}
                                            />
                                        </Col>
                                        <Col md={2}>
                                            <input type="button" className="btn btn-primary form-control" onClick={search}
                                                value="தேடு" />
                                        </Col>
                                    </Row>
                                    {appContext.IsTamil && <Row>
                                        <Col md={3}>
                                            <input type="radio" name="searchType" id="Contains"
                                                defaultChecked={searchType == "Contains"} value="Contains" onClick={() => setSearchType("Contains")} />
                                            <label className="radio-inline" htmlFor="Contains">உள்ள குறள்</label>
                                        </Col>
                                        <Col md={3}>
                                            <input type="radio" name="searchType" value="StartsWith" id="StartsWith"
                                                defaultChecked={searchType == "StartsWith"} onClick={() => setSearchType("StartsWith")} />
                                            <label className="radio-inline" htmlFor="StartsWith">தொடங்கும் குறள்</label>
                                        </Col>
                                        <Col md={6}>
                                            <input type="radio" name="searchType" value="EndsWith" id="EndsWith"
                                                defaultChecked={searchType == "EndsWith"} onClick={() => setSearchType("EndsWith")} />
                                            <label className="radio-inline" htmlFor="EndsWith">முடியும் குறள்</label>
                                        </Col>
                                    </Row>
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>

                {isLoaded &&
                    <div>
                        <h5>{data.length} record(s) found</h5>
                    </div>
                }

                <Kurals thirukkurals={data} searchText={searchText} />
            </>

        )
    }
}

export default Search;