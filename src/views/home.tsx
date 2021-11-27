import React, { useEffect, useState } from 'react';
import { IKural } from '../common/interfaces';
import DataService from '../common/dataService'
import Kurals from '../components/kurals';
import { useParams } from 'react-router-dom';

interface RouteParams {
  chapterIndex?: string
}

const Home = (props: any) => {
  const [dataError, setDataError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([] as IKural[]);
  const routeParams = useParams<RouteParams>();
  const chapterIndices = Array.from({ length: 133 }, (_, i) => i + 1)

  useEffect(() => {
    DataService.getThirukkurals(routeParams.chapterIndex ?? 1).then(
      result => {
        setData(result.data.Data as IKural[])
        setIsLoaded(true);
      },
      error => {
        console.error(error);
        setDataError(error);
        setIsLoaded(true);
      });
  }, [routeParams]);

  if (dataError) {
    return <div>Error: {dataError}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        {/* {chapterIndices.map(index => (
            <div>{index}</div>
          ))} */}

        <Kurals thirukkurals={data} />
      </div>
    );
  }
}

export default Home;