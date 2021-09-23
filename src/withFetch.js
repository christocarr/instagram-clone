import { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

function withFetch(Component) {
  const WithFetch = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
      getData();
    }, []);

    const getUrl = (type = 'photos') => {
      const { url } = props.match;

      const baseUrl = process.env.REACT_APP_BASE_URL;
      const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
      if (props.match.path === '/search') {
        const splitPath = props.location.pathname.split('/');
        const searchTerm = splitPath[2];
        return `${baseUrl}${url}/${type}?client_id=${key}&page=${page}&query=${searchTerm}`;
      }

      if (props.match.path === '/explore') {
        return `${baseUrl}/photos/random?client_id=${key}&count=30`;
      }

      return `${baseUrl}${url}photos?client_id=${key}&page=${page}`;
    };

    const getData = async (type) => {
      try {
        const url = getUrl(type);
        console.log(url);
        const response = await axios.get(url);

        if (props.match.path === '/search') {
          if (type === 'collections') {
            console.log(type);
            const newData = response.data.results.map(
              (item) => item.cover_photo
            );

            setData([...data, ...newData]);
          } else {
            setData([...data, ...response.data.results]);
            setPage(page + 1);
          }

          return;
        }
        setData([...data, ...response.data]);
        setPage(page + 1);
      } catch (err) {
        console.error(err);
      }
    };

    return <Component {...props} data={data} getPhotos={getData} />;
  };

  return WithFetch;
}

export default withFetch;
