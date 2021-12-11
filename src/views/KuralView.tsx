import { IKural } from '../common/interfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Kural from '../components/Kural';
import DataService from '../common/DataService';

interface RouteParams {
    kuralIndex?: string
}

const KuralView = (props: any) => {
    const routeParams = useParams<RouteParams>();
    const [data, setData] = useState({} as IKural);
    const [dataError, setDataError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let kuralIndex = routeParams.kuralIndex ?? 1;
        DataService.getThirukkural(kuralIndex).then(
            result => {
                setData(result.data.Data as IKural)
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
            <Kural kural={data} />
        )
    }
}

export default KuralView;