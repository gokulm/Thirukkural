import React from 'react';
import DataService from './dataService'

class Chapters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        new DataService().getChapters().then(
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

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <table class="table table-bordered table-striped tableThirukkural visible-md visible-sm visible-lg">
                    <thead>
                        <th>#</th>
                        <th>அதிகாரம்</th>
                        <th>Chapter</th>
                        <th>Adhigaaram</th>
                        <th></th>
                    </thead>
                    {
                        items.map(thirukkural => (
                            <tr>
                                <td class="col-md-1">{thirukkural.Index}</td>
                                <td class="col-md-3"> {thirukkural.Tamil} </td>
                                <td class="col-md-3"> {thirukkural.English} </td>
                                <td class="col-md-3"> {thirukkural.Transliteration} </td>
                                <td class="col-md-2"> <a ui-sref="thirukkuralsbychapters( { index: thirukkuralChapter.Index })"><span class="brand" i18n="common.Kurals"></span></a> </td>
                            </tr>
                        )
                        )}

                </table>
            )
        }
    }
}

export default Chapters;