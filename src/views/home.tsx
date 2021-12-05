import { useEffect, useState } from 'react';
import { IChapter, IKural } from '../common/interfaces';
import DataService from '../common/DataService'
import { useParams, useHistory } from 'react-router-dom';
import Pagination from 'react-responsive-pagination';
import Kurals from '../components/Kurals';

interface RouteParams {
  chapterIndex?: string
}

const Home = (props: any) => {
  const [dataError, setDataError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([] as IKural[]);
  const [chapter, setChapter] = useState<IChapter>({} as IChapter);
  const routeParams = useParams<RouteParams>();
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
    history.push(`/chapters/${page}/kurals`);
  }

  useEffect(() => {
    let chapterIndex = routeParams.chapterIndex ?? 1;
    DataService.getThirukkurals(chapterIndex).then(
      result => {
        setData(result.data.Data as IKural[])
        setIsLoaded(true);
      },
      error => {
        console.error(error);
        setDataError(error);
        setIsLoaded(true);
      });

    DataService.getChapter(chapterIndex).then(
      result => {
        setChapter(result.data.Data as IChapter)
        setIsLoaded(true);
      },
      error => {
        console.error(error);
        setDataError(error);
        setIsLoaded(true);
      });

      setCurrentPage(+chapterIndex);

  }, [routeParams]);

  if (dataError) {
    return <div>Error: {dataError}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <Pagination
          previousLabel=""
          current={currentPage}
          total={133}
          onPageChange={handlePageChange}
        />

        <Kurals thirukkurals={data} chapter={chapter} />
      </div>
    );
  }
}

export default Home;