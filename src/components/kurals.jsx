import React from 'react';

class Kurals extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            thirukkurals: props.thirukkurals
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {
                    this.props.thirukkurals.map(thirukkural => (
                        <div class="panel-body">
                            <div class="kuralProperty">
                                <div class="kuralPropertyHeading">குறள் {thirukkural.Index}:</div>
                                <div dangerouslySetInnerHTML={{ __html: thirukkural.Tamil }} />
                            </div>
                            <div class="kuralProperty">
                                <div class="kuralPropertyHeading">மு.வ உரை: </div>
                                <div>{thirukkural.MuVaUrai}</div>
                            </div>
                            <div class="kuralProperty">
                                <div class="kuralPropertyHeading"> சாலமன் பாப்பையா உரை:</div>
                                <div>{thirukkural.SolomonPaapaiyaUrai}</div>
                            </div>
                            <div class="kuralProperty">
                                <div class="kuralPropertyHeading">கலைஞர் உரை:</div>
                                <div>{thirukkural.KalaignarUrai}</div>
                            </div>
                            <div class="kuralProperty" ng-hide="layout.IsTamil()">
                                <div class="kuralPropertyHeading">Couplet:</div>
                                <div dangerouslySetInnerHTML={{ __html: thirukkural.English }} />
                            </div>
                            <div class="kuralProperty" ng-hide="layout.IsTamil()">
                                <div class="kuralPropertyHeading">English Explanation:</div>
                                <div>{thirukkural.EnglishMeaning}</div>
                            </div>
                            <div class="kuralProperty" ng-hide="layout.IsTamil()">
                                <div class="kuralPropertyHeading">Transliteration:</div>
                                <div dangerouslySetInnerHTML={{ __html: thirukkural.TamilTransliteration }} />
                            </div>
                        </div>))
                }
            </div>
        );
    }
}

export default Kurals;