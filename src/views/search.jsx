import React from 'react';
import DataService from '../common/dataService'
import Kurals from '../components/kurals';
import {
    Link
} from "react-router-dom";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            searchText: ''
        };

        this.searchEnglish = this.searchEnglish.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    componentDidMount() {
    }

    handleSearchTextChange(event) {
        this.setState({ searchText: event.target.value });
        console.log(this.state);
    }

    searchEnglish() {
        console.log("searching...");
        if (this.state.searchText) {
            new DataService().searchEnglish(this.state.searchText).then(
                result => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result.data.Data
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <>
                    <div class="row">
                        <div class="col-lg-12 form-group">
                            <div class="row">
                                <div class="col-md-10">
                                    <input type="text" placeholder="நட்பு உள்ள குறள் தேட, Natpu டைப் செய்து ஸ்பேஸ்பார் அழுத்துங்கள்"
                                        id="transliterateTextarea" class="form-control" onChange={this.handleSearchTextChange}
                                    />
                                </div>
                                <div class="col-md-2">
                                    <input type="button" class="btn btn-primary form-control" onClick={this.searchEnglish}
                                        value="தேடு" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="col-md-3">
                                        <label class="radio-inline"><input type="radio" name="searchType"
                                            value="Contains" />உள்ள குறள்</label>
                                    </div>
                                    <div class="col-md-3">
                                        <label class="radio-inline"><input type="radio" name="searchType" value="StartsWith"
                                        />தொடங்கும் குறள்</label>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="radio-inline"> <input type="radio" name="searchType" value="EndsWith"
                                        />முடியும் குறள்</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Kurals thirukkurals={items} />
                </>

            )
        }
    }
}

export default Search;