import React from 'react';
import DataService from '../dataService'
import Kurals from '../kurals';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      chapterIndices: Array.from({ length: 133 }, (_, i) => i + 1)
    };
  }

  componentDidMount() {
    let chapterIndex = 1;
    if (this.props.match) {
      chapterIndex = this.props.match.params.chapterIndex;
    }
    new DataService().getThirukkurals(chapterIndex).then(
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
        <div>
          {/* {chapterIndices.map(index => (
            <div>{index}</div>
          ))} */}

          <Kurals thirukkurals={items} />

          {/* {


            items.map(thirukkural => (
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
          } */}
        </div>
      );
    }
  }
}

export default Home;