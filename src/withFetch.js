import { useState, useEffect } from 'react';
import axios from 'axios';

function withFetch(Component, requestedUrl) {
  const WithFetch = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      getData();
    }, []);

    const getUrl = () => {
      const { url } = props.match;
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
      if (props.match.path === '/search') {
        const splitPath = props.location.pathname.split('/');
        const searchTerm = splitPath[2];
        return `${baseUrl}${url}/photos/?client_id=${key}&page=${page}&query=${searchTerm}`;
      }
      return `${baseUrl}${url}/photos/?client_id=${key}&page=${page}`;
    };

    const getData = async () => {
      try {
        const url = getUrl();
        const response = await axios.get(url);
        console.log(response.data);
        if (response.data.results) {
          setData([...data, ...response.data.results]);
          setPage(page + 1);
        }
        setData([...data, ...response.data]);

        setPage(page + 1);
      } catch (err) {
        console.error(err);
      }
    };

    return (
      <Component
        {...props}
        data={data}
        getPhotos={() => getData(requestedUrl)}
      />
    );
  };

  return WithFetch;
}

export default withFetch;
