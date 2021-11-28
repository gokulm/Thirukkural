import React, { useEffect, useState } from 'react';
import { IKural } from '../common/interfaces';
import DataService from '../common/dataService'
import Kurals from '../components/kurals';
import { useParams, useHistory } from 'react-router-dom';
import Pagination from 'react-responsive-pagination';

interface RouteParams {
  chapterIndex?: string
}

const Home = (props: any) => {
  const [dataError, setDataError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([] as IKural[]);
  const routeParams = useParams<RouteParams>();
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  // const chapterIndices = Array.from({ length: 133 }, (_, i) => i + 1)

  // let active = 1;
  // let items : any = [];
  // for (let number = 1; number <= 133; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    history.push(`/chapters/${page}/kurals`);
  }

  const paginationBasic = () => (
    <Pagination
      current={currentPage}
      total={133}
      onPageChange={handlePageChange}
    />
  );

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
        { paginationBasic() }

        <Kurals thirukkurals={data} />
      </div>
    );
  }
}

export default Home;