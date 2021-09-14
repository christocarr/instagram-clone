import { useState, useEffect } from 'react';
import axios from 'axios';

function withFetch(Component) {
  const WithFetch = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [searchType, setSearchType] = useState('photos')
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
        return `${baseUrl}${url}/${searchType}?client_id=${key}&page=${page}&query=${searchTerm}`;
      }

      if (props.match.path === '/explore') {
        return `${baseUrl}/photos/random?client_id=${key}&count=30`;
      }

      return `${baseUrl}${url}photos?client_id=${key}&page=${page}`;
    };

    const getData = async () => {
      try {
        const url = getUrl();
        const response = await axios.get(url);
        if (props.match.path === '/search') {
          setData([...data, ...response.data.results]);
          setPage(page + 1);
          return;
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
        getPhotos={getData}
      />
    );
  };

  return WithFetch;
}

export default withFetch;
