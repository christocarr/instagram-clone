import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getSearchPhotos,
  getSearchTerm,
} from '../../store/searchResultsPageReducer/actions';

function Search({ getSearchPhotos, getSearchTerm }) {
  const [searchTerm, setSearchTerm] = useState('');

  const history = useHistory();

  const handleChange = (ev) => {
    setSearchTerm(ev.target.value.toLowerCase());
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    getSearchTerm(searchTerm);
    history.push('/');
    getSearchPhotos(searchTerm);
    setSearchTerm('');
    history.push(`/search/photos/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={searchTerm} onChange={handleChange} />
    </form>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  getSearchPhotos,
  getSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
